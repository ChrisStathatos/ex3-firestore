import firebase from 'firebase/app';
import 'firebase/firestore';


/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4V1s9nYaRbm2L5Cwd_MvHKzh3eHvIh8k",
  authDomain: "exercice3-7b015.firebaseapp.com",
  projectId: "exercice3-7b015",
  storageBucket: "exercice3-7b015.appspot.com",
  messagingSenderId: "213138446337",
  appId: "1:213138446337:web:373eb5b76fb8c888460800",
  measurementId: "G-M0PYPKCS5Y"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = firebase.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;
