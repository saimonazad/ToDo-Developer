import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCi05AemC3zE8y9BvU-ZL7nPJcid0SdcPY",
    authDomain: "tododev-6b7e9.firebaseapp.com",
    projectId: "tododev-6b7e9",
    storageBucket: "tododev-6b7e9.appspot.com",
    messagingSenderId: "286019784085",
    appId: "1:286019784085:web:3b5286cf55bf162a737a9c",
    measurementId: "G-LLKFJVLDWH"
})

export { firebaseConfig as firebase} 