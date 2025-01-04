import 'dotenv/config';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const dbRef = ref(database), dbSet = set, dbGet = get, dbrem = remove;


export { dbRef, dbSet, dbGet, dbrem };
export default firebaseConfig;
