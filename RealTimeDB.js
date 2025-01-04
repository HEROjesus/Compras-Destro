import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';
import 'dotenv/config';

// Configuração do Firebase usando variáveis de ambiente
export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Referência ao banco de dados
const database = getDatabase(app);

// Teste de escrita no RTDB
async function RTDB() {
    try {
        const testRef = ref(database, 'test');
        await set(testRef, { message: 'RTDB está funcionando!' });
        console.log('Dados escritos com sucesso!');

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
