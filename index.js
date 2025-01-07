import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, push } from 'firebase/database';
import firebaseConfig from './RealTimeDB.js';
import { documentId } from 'firebase/firestore';
import 'dotenv/config';


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// Corrigindo seletores
const input = documentId('#input-field');
const button = documentId('#add-button');


async function RTDB() {
    try {
        const testRef = ref(database, 'movies');
        await push(testRef, { masage: `${input.value}` });
        console.log(`${input.value} adicionado ao RTDB.`);
        // Teste de leitura do RTDB
        const snapshot = await get(testRef);
        if (snapshot.exists()) {
            console.log('Dados lidos do RTDB:', snapshot.val());
        } else {
            console.log('Nenhum dado encontrado no RTDB.');
        }
    } catch (error) {
        console.error('Erro ao testar RTDB:', error);
    }
}
RTDB();

