import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, push } from 'firebase/database';
import firebaseConfig from './RealTimeDB.js';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, Timestamp, documentId,onSnapshot, } from "firebase/firestore"; // Importando o método setDoc             
import 'dotenv/config';



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);


// Corrigindo seletores
const input = documentId('#input-field');
const button = documentId('#add-button');

// Add a new document in collection "cities"
 const  docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    on: true,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
console.log(docData.stringExample);

const tentar = async () => { 
    try { 
        const testRef = ref(database, 'movies');
        await push(testRef, docData);
        console.log("Data pushed successfully");
    } catch (error) {
        console.error("Error:", error);
    }
}
tentar();


