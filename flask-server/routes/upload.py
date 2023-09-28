from flask import Blueprint, jsonify, request
import os

upload_bp = Blueprint('upload', __name__)

# Specify the directory where you want to save uploaded files
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@upload_bp.route('/api/upload', methods=['GET'])
def get_upload():
    return jsonify({"upload": 'hello'})

@upload_bp.route('/api/upload', methods=['POST'])
def add_upload():
    try:
        # Check if a file was provided in the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400

        uploaded_file = request.files['file']

        # Check if the file has a valid filename
        if uploaded_file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        # Save the uploaded file to the specified directory
        file_path = os.path.join(UPLOAD_FOLDER, uploaded_file.filename)
        uploaded_file.save(file_path)

        # You can perform further processing on the saved file here if needed

        return jsonify({'message': 'File uploaded successfully', 'file_path': file_path})

    except Exception as e:
        return jsonify({'error': f'Error uploading file: {str(e)}'}), 500

# Additional routes or logic can be added as needed

