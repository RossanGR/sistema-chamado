import firebase from "firebase";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAV8uNMc62RfmWc2m9ghHneRYj-mzYiknQ",
    authDomain: "sistema-de-chamado-653b3.firebaseapp.com",
    projectId: "sistema-de-chamado-653b3",
    storageBucket: "sistema-de-chamado-653b3.appspot.com",
    messagingSenderId: "338585036886",
    appId: "1:338585036886:web:ca248ee45ca79b44dc33f7"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }


  export default firebase;