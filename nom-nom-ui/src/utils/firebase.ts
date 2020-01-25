import firebase from 'firebase';

let appFirebaseConfig = {
    apiKey: "AIzaSyAaMopK8LkeHOchrIJmnhOQ7BYkD_0BrcA",
    authDomain: "foodfinderpersist.firebaseapp.com",
    databaseURL: "https://foodfinderpersist.firebaseio.com",
    projectId: "foodfinderpersist",
    storageBucket: "foodfinderpersist.appspot.com",
    messagingSenderId: "574783027429",
    appId: "1:574783027429:web:1da0af0b2b32fffabafc0c",
    measurementId: "G-QSWJ8FDN0N"
};

firebase.initializeApp(appFirebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export {
    db
}