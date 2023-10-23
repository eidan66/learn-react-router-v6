import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, collection, doc, getDocs, getDoc, query, where} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//@ts-ignore
const analytics = getAnalytics(app);

const db = getFirestore(app)
const vansCollectionRef = collection(db, 'vans')


export const getVans = async () => {
    const querySnapshot = await getDocs(vansCollectionRef)
    return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
}

export const getVan = async (id: string) => {
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef)

    return {...vanSnapshot.data(), id: vanSnapshot.id}
}

export const getHostVans = async () => {
    const q = query(vansCollectionRef, where('hostId', '==', '123'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
}

export const loginUser = async (creds: any) => {
    const res = await fetch('/api/login', {
        method: 'post', body: JSON.stringify(creds)
    })

    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data;

}