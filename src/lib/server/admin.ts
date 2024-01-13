import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID, FB_SERVICE_ACCOUNT } from '$env/static/private';
import admin from 'firebase-admin';

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase Admin Error: ', error.stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
