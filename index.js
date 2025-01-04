import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import firebaseConfig from './firebaseConfig';
import dbRef from './RealTimeDB';
import 'dotenv/config';


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const ListaDeCompras = dbRef.ref(database, 'ListaDeCompras');


