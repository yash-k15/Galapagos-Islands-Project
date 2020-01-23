
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database")


var firebaseConfig = {
    apiKey: "AIzaSyAXVrby0nuyxqWAOEhNK78bwQzEW-lxQEQ",
    authDomain: "galapago-26360.firebaseapp.com",
    databaseURL: "https://galapago-26360.firebaseio.com",
    projectId: "galapago-26360",
    storageBucket: "galapago-26360.appspot.com",
    messagingSenderId: "163908843066",
    appId: "1:163908843066:web:312213cb4e174967c5a703",
    measurementId: "G-ZRHVMMMDQN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("test/firstname");

document.getElementById("pushMe").addEventListener("click", submitForm);

function submitForm(){
    var name = document.getElementById("firstname").value;
    window.alert(name);
    saveMessage(name);
}

function saveMessage(name){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({name: name});
}