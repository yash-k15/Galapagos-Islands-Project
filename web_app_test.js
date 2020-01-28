//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");


firebase.initializeApp({
    apiKey: "AIzaSyAXVrby0nuyxqWAOEhNK78bwQzEW-lxQEQ",
    authDomain: "galapago-26360.firebaseapp.com",
    databaseURL: "https://galapago-26360.firebaseio.com",
    projectId: "galapago-26360",
    storageBucket: "galapago-26360.appspot.com",
    messagingSenderId: "163908843066",
    appId: "1:163908843066:web:312213cb4e174967c5a703",
    measurementId: "G-ZRHVMMMDQN"
});

var db = firebase.firestore();
var docRef = db.doc("test/test_user");

docRef.set({
    first_name: "",
    last_name : ""
}).then(function(){
    console.log("User saved!");
}).catch(function(error){
    console.log("Error: ", error);
});

document.getElementById("pushMe").addEventListener("click", function submitForm(){
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;
    console.log(first_name, last_name);
    docRef = db.collection("test").doc("test_user3");
    docRef.set({
        first_name: first_name,
        last_name : last_name
    }).then(function(){
        console.log("User saved!");
    }).catch(function(error){
        console.log("Error: ", error);
    });
    console.log("GOODBYE!");
});

/*function saveMessage(first_name, last_name){
    db.collection("test").doc("test_user3").set({
        first_name: first_name,
        last_name : last_name
    }).then(function(){
        console.log("User saved!");
    }).catch(function(error){
        console.log("Error: ", error);
    });
}

function getMessage(){
    db.collection("test").doc("test_user3").get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    console.log("GOODBYE!");
} */
