from flask import Flask, request, jsonify
from flask_cors import CORS
from dependencies import *
from unet import *
import base64
import io
import numpy as np
from PIL import Image


app = Flask(__name__)
CORS(app,supports_credentials=True)



#for segmentation
upload_folder = "./static"
device = "cpu"
segment_model = None
path = "./model_state_dict.pt"
data_transforms = None


#for segmentation
def image_loader(loader, image_name):
    image = Image.open(image_name)
    image = loader(image).float()
    image = torch.tensor(image, requires_grad=False)
    image = image.unsqueeze(0)
    new_tensor = image.clone()
    
    return new_tensor

def process_image(data_transforms, path_name, image_name, filemodel):
    with torch.no_grad():
        img = image_loader(data_transforms, path_name)
        pred = segment_model(img)
        plt.subplot(1,2,1)                      #original image 
        plt.imshow(np.squeeze(img.cpu().numpy()).transpose(1,2,0))
        plt.title('Original Image')

        plt.subplot(1,2,2)                      #segmented image
        plt.imshow(np.squeeze(pred.cpu()) > .5)
        plt.title('Tumour Prediction')
        plt.savefig("%s/%s-SEGMENTED.png" % (upload_folder, image_name), bbox_inches = "tight")


@app.route("/api/data", methods=["GET", "POST"])
def upload_predict():
    if request.method == "POST":
         # Get the Base64 encoded image from the request
        base64_data = request.json.get('base64_image')

        # Decode the Base64 string to obtain the image data
        image_data = base64.b64decode(base64_data)

        # Convert the image data to a PIL Image object
        image = Image.open(io.BytesIO(image_data))

        # Ensure the image is in RGB mode (TIFF doesn't support all modes)
        image = image.convert('RGB')

        # Create a file-like object to save the TIFF image
        tiff_buffer = io.BytesIO()

        # Save the image as TIFF to the file-like object
        image.save(tiff_buffer, format='TIFF')
        image_file = request.files["image"]
        if image_file:                                                          #if an image was recieved
            image_location = os.path.join(upload_folder,image_file.filename)    #go to ./static folder 
            image_file.save(image_location)                                     #save the image in ./static folder

            image_name = os.path.basename(image_location)  #to get only the path name     
            image_name = image_name.split('.')[0]       #name of image without file extension
            
            #calling for segmentation
            process_image(data_transforms, image_location, image_name, segment_model)
            #calling for classification
            #predicted_tumor = model_predict(image_location, classifier_model)
            image_loc  = ("%s-SEGMENTED.png" % image_name)
            return jsonify({'image_loc': image_loc}), 200
        image_loc  = ("%s-SEGMENTED.png" % image_name)
        return jsonify({'image_loc': image_loc}), 200
    else:
        return jsonify({'image_loc': 'none'}), 200



if __name__ == '__main__':
    segment_model = UNet().to(device)   #loading the whole model architecture
    segment_model.load_state_dict(torch.load(path, map_location=torch.device('cpu')))   #loading the pre trained weights

    segment_model.eval()    #switch the model from training mode to evaluation mode

    data_transforms = transforms.Compose([transforms.Resize(256),transforms.ToTensor()])
    app.run(debug=True)






































# Registration route
# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     email = data['email']
#     password = data['password']

#     try:
#         user = auth.create_user(
#             email=email,
#             password=password
#         )
#         return jsonify({'message': 'User registered successfully'}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 400

# # Login route
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     email = data['email']
#     password = data['password']
#     try:
#         user = pb.auth().sign_in_with_email_and_password(email, password)
#         return jsonify({'message': 'Login successful', 'idToken': user['idToken']}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 401


































# from flask import Flask, jsonify
# from flask_cors import CORS

# app = Flask(__name__)

# # Configure CORS on the Flask app instance
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# @app.route('/')
# def hello_world():
#     return 'Hello, Flask!'

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = [
#     {"id": 1, "name": "Item 1"},
#     {"id": 2, "name": "Item 2"},
#     {"id": 3, "name": "Item 3"},
# ]
#     return jsonify(data)

# if __name__ == '__main__':
#     app.run(debug=True)
