import React from 'react'
import './register.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {firebaseApp} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, push } from 'firebase/database';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import ErrorPopup from './errorPopup';
/*import { IconArrowDown } from "./IconArrowDown";
import { IconArrowDownWrapper } from "./IconArrowDownWrapper";*/

function Register() {
  //========================handle data======================================================================
  const [formData, setFormData] = useState({
    contactno:'',
    firstname:'',lastname:'',medicals:'',title:'',confirm:''
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentError, setCurrentError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateContact = () => {
    // Define your contact number validation logic here (e.g., using regular expressions)
    const regex = /^\d{10}$/; // Assumes a 10-digit number

    if (!regex.test(formData.contactno)) {
      setCurrentError('contact no');
    } else {
      setCurrentError(''); // Clear the error message when the input is valid
    }
  };

  const validateEmail = () => {
    // Regular expression to match a valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(formData.email)) {
      setCurrentError('email');
      // Email is in correct format
      // No alert here as requested
    } else {
      // Email is not in correct format, show the error popup
      setCurrentError('');
    }
  }
   //==========================================hande firebase=================================================================

   // Initialize Firebase
  
   const auth = getAuth(firebaseApp);
 
 
   const db = getDatabase(firebaseApp);
   const fire_db = getFirestore(firebaseApp);
   const dataRef = ref(db, 'users');
 
   const handleRegister = async (e) => {
     e.preventDefault();
     // Check contact number validity before proceeding
     validateContact();
     validateEmail();

     if (formData.password !== formData.confirm) {
      setCurrentError('password');
      setShowError(true);
      return;
    } else {
      setCurrentError('');
    }
    
       try {
         const newData = {
           key1: email,
           key2: password,
           key3: formData.firstname,
           key4 : formData.lastname,
           key5: formData.contactno,
           key6 : formData.medicals,
           key7 : formData.title,
           key8: formData. confirm
           
         };
       const FiredataRef = collection(fire_db,'users')
       try {
         const docRef = await addDoc(FiredataRef, newData);
         console.log('Document written with ID: ', docRef.id);
         
       } catch (e) {
         console.error('Error adding document: ', e);
       }
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const user = userCredential.user;
       console.log('User logged in:', user);
       navigate('/dashboard', { replace: true });
       
 
     } catch (error) {
       console.error('Register:', error.message);
       setShowError(true);  // Display the error popup
     }
   };
 
  //==========================================================================================================================
  
  return (
    <div className="registeration">
      
      <div onSubmit={handleRegister} className="form" >
      <div className="rectangle"/>
        <div className="overlap-group">
          <div className="rectangle-1" /*white rectangle*//>
          <select className="input-11" type="text" name="title" placeholder="Title"  value={formData.title} onChange={handleChange}>
              <option value="" disabled selected>Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss.</option>
              <option value="Miss">Not willing to say</option>
            </select> 
          <input className="input-1" type="text" name="firstname" placeholder="First Name" 
          value={formData.firstname} onChange={handleChange} required  />
          <input className="input-2" type="text" name="lastname" placeholder="Last Name" 
          value={formData.lastname} onChange={handleChange} required  />
          <select className="input-7" type="text" name="medicals" placeholder="Medical specializations" 
            value={formData.medicals} onChange={handleChange} >
              <option value="" disabled selected>Medical specializations</option>
              <option value="Pathologist">Pathologist</option>
              <option value="Radiologist">Radiologist</option>
              <option value="Medical Oncologist">Medical Oncologist</option>
              <option value="Surgical Oncologist">Surgical Oncologist</option>
              <option value="Hematologist">Hematologist</option>
              <option value="Clinical Research Coordinator">Clinical Research Coordinator</option>
              <option value="Laboratory Technician">Laboratory Technician</option>
          </select>

          <input className="input-6" type="text" name="contactno" placeholder="Contact Number" 
          value={formData.contactno} onChange={handleChange} onBlur={validateContact} required  />
          {showError && (
              <ErrorPopup
                message={
                  currentError=='contact no'
                    ? 'Please correct the contact number.'
                    : 'An error occurred during registration.'
                }
                onClose={() => setShowError(false)} // Close the popup when the "Close" button is clicked
              />
            )}
          <input className="input-4" type="text" name="email" placeholder="Email" value={formData.email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail}required  />
            {showError && (
              <ErrorPopup
                message={currentError=='email'
                ? 'Please correct the email address'
                : 'An error occurred during registration.'}
                onClose={() => setShowError(false)}
              />
            )}
          <input className={`input-9 ${currentError === 'password' ? 'error' : ''}`} 
            type="password" name="pass" placeholder="Password" value={formData.pass} onChange={(e) => setPassword(e.target.value)}required  />
            <input className={`input-10 ${currentError === 'password' ? 'error' : ''}`}
             type="password" name="confirm" placeholder="Confirm Password" 
            value={formData.confirm} onChange={handleChange}required  />
            {showError && (
              <ErrorPopup
                message={currentError=='password'
                ? 'password confirmation does not match'
                : 'An error occurred during registration.'}
                onClose={() => setShowError(false)}
              />
            )}
            <input onClick={handleRegister} type="submit" className="btn-Reg" value="Register" />
       
          
          
        </div>
      </div>  
    </div>
  );
}

export default Register;




















































// import React from 'react'
// import './register.css';
// import { useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import {firebaseApp} from '../firebase';
// import { useNavigate } from 'react-router-dom';
// import { getDatabase, ref, push } from 'firebase/database';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// /*import { IconArrowDown } from "./IconArrowDown";
// import { IconArrowDownWrapper } from "./IconArrowDownWrapper";*/

// function Register() {
//   //========================handle data======================================================================
//   const [formData, setFormData] = useState({
//    contactno:'',
//     firstname:'',lastname:'',pnoneno:'',DoB:'',medical:'',hospital:'',title:'',confirm:'',country:'',address:''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  
//   //==========================================hande firebase=================================================================



//   const navigate = useNavigate();

  
//   // Initialize Firebase
 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');



//   const auth = getAuth(firebaseApp);


//   const db = getDatabase(firebaseApp);
//   const fire_db = getFirestore(firebaseApp);
//   const dataRef = ref(db, 'users');

  






//   const handleRegister = async (e) => {
//     e.preventDefault();
//       try {
//         const newData = {
//           key1: email,
//           key2: password,
//           key2: formData.firstname,
//           key3 : formData.lastname,
//           key4: formData.contactno,
//           key5: formData.pnoneno,
//           key6: formData.DoB,
//           key7 : formData.medical,
//           key8: formData.hospital,
//           key9 : formData.title,
//           key10: formData. confirm,
//           key11 : formData.country,
//           key12 : formData.address
//         };
//       const FiredataRef = collection(fire_db,'users')
//       try {
//         const docRef = await addDoc(FiredataRef, newData);
//         console.log('Document written with ID: ', docRef.id);
        
//       } catch (e) {
//         console.error('Error adding document: ', e);
//       }
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log('User logged in:', user);
      
     

      

//       navigate('/dashboard', { replace: true });
      

//     } catch (error) {
//       console.error('Register:', error.message);
//       alert('invalid credentials');
//     }
//   };



//   return (
//     <div className="registeration">
//       <div onSubmit={handleRegister} className="form" >
//       <div className="overlap-group-wrapper">
//         <div className="overlap-group">
//         <div className="rectangle" /*white rectangle*//>
//         <div className="div" />
//           <input className="input-1" type="text" name="firstname" placeholder="First Name" 
//           value={formData.firstname} onChange={handleChange} required  />
//           <input className="input-2" type="text" name="lastname" placeholder="Last Name" 
//           value={formData.lastname} onChange={handleChange} required  />
//           <div className="rectangle-16"/*blue big rectangle*/ /> 
//           <div className="overlap-2">
//             <div className="button-container">
//               <input type="submit" value="Register"  className = 'Regsub' onClick={handleRegister}/>
//             </div>
//           </div>
//           <input className="input-6" type="text" name="pnoneno" placeholder="Contact Number" 
//           value={formData.contactno} onChange={handleChange} required  />
//           <div className="text-wrapper-8">Date of Birth</div>
//           <div className="text-wrapper-5">Contact details</div>
//           <div className="text-wrapper-6">General Information</div>
//           <input className= "input-12" type='date' name="DoB"placeholder='Enter BirthDate' value={formData.DoB} onChange={handleChange}required/>
//           <input className="input-7" type="text" name="medicals" placeholder="Medical specializations" 
//           value={formData.medical} onChange={handleChange} />
//           <input className="input-8" type="text" name="hospital" placeholder="Hospital or Medical institution" 
//           value={formData.hospital} onChange={handleChange} />
//           <input className="input-11" type="text" name="title" placeholder="Title"  value={formData.title} onChange={handleChange}/>
//           <p className="i-do-accept-the">
//             <span className="span">I do accept the </span>
//             <span className="text-wrapper-11">terms and conditions</span>
//             <span className="span"> of your site</span>
//           </p>
//           <input className="input-4" type="text" name="email" placeholder="Email" value={formData.email} onChange={(e) => setEmail(e.target.value)}required  />
//           <input className="input-9" type="password" name="pass" placeholder="Password" value={formData.pass} onChange={(e) => setPassword(e.target.value)}required  />
//           <input className="input-5" type="text" name="country" placeholder="Country" required  value={formData.country} onChange={handleChange}/>
//           <input className="input-3" type="text" name="address" placeholder="Address" required  
//           value={formData.address} onChange={handleChange}/>
//           <input className="input-10" type="password" name="confirm" placeholder="Confirm Password" 
//           value={formData.confirm} onChange={handleChange}required  />
//           <input type="checkbox" name="accept"  />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Register;