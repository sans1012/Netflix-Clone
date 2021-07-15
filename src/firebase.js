import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyAgkAi4ba_eYgYnAb61BQY3a6voK0-YKFw",
      authDomain: "netflix-build-36fa8.firebaseapp.com",
      projectId: "netflix-build-36fa8",
      storageBucket: "netflix-build-36fa8.appspot.com",
      messagingSenderId: "603197414722",
      appId: "1:603197414722:web:3661493f31b963545e7cdb"
    };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export { auth};
export default db;