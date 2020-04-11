import firebase from 'firebase';

let appFirebaseConfig = {
    apiKey: "AIzaSyAaMopK8LkeHOchrIJmnhOQ7BYkD_0BrcA",
    authDomain: "foodfinderpersist.firebaseapp.com",
    databaseURL: "https://foodfinderpersist.firebaseio.com",
    projectId: "foodfinderpersist",
    storageBucket: "foodfinderpersist.appspot.com",
    messagingSenderId: "574783027429",
    appId: "1:574783027429:web:2b17d41c05ddb1a0bafc0c",
    measurementId: "G-HB7QWW60ZN"
};

firebase.initializeApp(appFirebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export {
    db,
}