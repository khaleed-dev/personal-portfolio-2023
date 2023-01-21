// form email validator library
import validator from "email-validator";
// migrating firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZAY5kicv-AQLpudaKkeA1t8nNxT3SyLk",
  authDomain: "personal-portfolio-2023.firebaseapp.com",
  databaseURL: "https://personal-portfolio-2023-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "personal-portfolio-2023",
  storageBucket: "personal-portfolio-2023.appspot.com",
  messagingSenderId: "988923608060",
  appId: "1:988923608060:web:f399002baf02f063b89079",
  measurementId: "G-1M85S2NZS7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


//todo add form functionality were the user is required to write there name, email & message. then this message gets sent to database.

const formName = document.querySelector('#name')
const formEmail = document.querySelector('#email')
const formMessage = document.querySelector('#message')

document.querySelector('form').addEventListener('submit', submitForm)

// firebase realtime database
const database = getDatabase(app);
const formDataRef = ref(database, "formData")

function submitForm(e){
    e.preventDefault()
    if(validator.validate(formEmail.value)){
        // getting from data
        const data = {
            name: formName.value,
            email: formEmail.value,
            message: formMessage.value
        }
        push(formDataRef, data)

        alert('Success message is sent!, i will reply asap.')
    }else {
        alert('enter a vaild email')
    }
}
