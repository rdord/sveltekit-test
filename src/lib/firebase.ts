// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiH8XbhxhVIz5X7ECw_YiClIfhuk3ZmWU',
  authDomain: 'svelte-course-63bc5.firebaseapp.com',
  projectId: 'svelte-course-63bc5',
  storageBucket: 'svelte-course-63bc5.appspot.com',
  messagingSenderId: '970108334155',
  appId: '1:970108334155:web:76a28eb6649d9d2f561dce'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app, 'gs://my-custom-bucket');
