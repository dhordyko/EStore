import "firebase/compat/database"; // in angular-fire-database.js

import firebase from 'firebase/compat/app'; // in angular-fire.js

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6Z88M1u1jL-U14GcmVnLtZQ9mofyrq2s",
    authDomain: "react-store-blog.firebaseapp.com",
    databaseURL: "https://react-store-blog-default-rtdb.firebaseio.com",
    projectId: "react-store-blog",
    storageBucket: "react-store-blog.appspot.com",
    messagingSenderId: "538645795098",
    appId: "1:538645795098:web:05fc5dde44bc83c8809ca3"
};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
export const dbBlogs = firebaseDB.ref('blogs');