import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsejHe1whfCXl3whcptLuQhkYNpcEzMEQ",
  authDomain: "vanlife-998e0.firebaseapp.com",
  projectId: "vanlife-998e0",
  storageBucket: "vanlife-998e0.firebasestorage.app",
  messagingSenderId: "604858880401",
  appId: "1:604858880401:web:cd082c992139f741f8ca30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    // console.log(vans)
    return vans 
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    const van = {...snapshot.data(), id: snapshot.id}
    
    return van

}

export async function getHostVans() {
    const hostedVans = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(hostedVans)
    const vans = snapshot.docs.map(doc =>({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}


export async function loginUser(creds) {
   
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, creds.email ,creds.password )
        // console.log(userCredentials)
        const user = userCredentials.user 
        return { user } ; 
    } catch (error) {
        throw{
            message: error.message,
            code: error.code
        }
    }
}






// for the fetching the vans on vans page



// for fetching the vans on Host Vans page
// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// for fetching the login credentials

// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }