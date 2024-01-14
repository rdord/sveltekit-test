// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// Returs a store wih the current user data
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const currentUser = writable<User | null>(null);
    return {
      subscribe: currentUser.subscribe
    };
  }

  const currentUser = writable(auth?.currentUser ?? null, set => {
    unsubscribe = onAuthStateChanged(auth, user => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe: currentUser.subscribe
  };
}

export const user = userStore();
