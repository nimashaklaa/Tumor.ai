// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo4L3CKbs0o20SoTcLMGNVWSjHHmJVsO0",
  authDomain: "tumor-ai-d1d79.firebaseapp.com",
  projectId: "tumor-ai-d1d79",
  storageBucket: "tumor-ai-d1d79.appspot.com",
  messagingSenderId: "187463773713",
  appId: "1:187463773713:web:14972774b3128254834bb0",
  measurementId: "G-327TNKZE6B"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export {firebaseApp};





/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAZJqBzNDRQngStP-yABTWh5SOdGCDdKzI",
  authDomain: "tumoridsys.firebaseapp.com",
  projectId: "tumoridsys",
  storageBucket: "tumoridsys.appspot.com",
  messagingSenderId: "287430774176",
  appId: "1:287430774176:web:da75241dc330c8272ca8c5",
  measurementId: "G-P3SG88XMN7"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);


export {firebaseApp};*/