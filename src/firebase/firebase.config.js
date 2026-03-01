// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy1mz5QnCfCYAE16f8qpCNXOH_6FTfnxc",
    authDomain: "fir-greennest.firebaseapp.com",
    projectId: "fir-greennest",
    storageBucket: "fir-greennest.firebasestorage.app",
    messagingSenderId: "306708299516",
    appId: "1:306708299516:web:f52ab2a1fa644d99bf6179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);