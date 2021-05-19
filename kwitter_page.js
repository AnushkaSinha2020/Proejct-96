var firebaseConfig = {
    apiKey: "AIzaSyADh5Ni-uJL2PfS3Dn-GPEyfx2ZY1h2auE",
    authDomain: "project-94-6f52c.firebaseapp.com",
    databaseURL: "https://project-94-6f52c-default-rtdb.firebaseio.com",
    projectId: "project-94-6f52c",
    storageBucket: "project-94-6f52c.appspot.com",
    messagingSenderId: "778849994640",
    appId: "1:778849994640:web:ee90e1fe8bb908b7a85515"
  };
  firebase.initializeApp(firebaseConfig);

userName= localStorage.getItem("user_name");
roomName= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function send(){
    msg= document.getElementById("message").value;
    firebase.database().ref(roomName).push({
        message: msg,
        name: userName,
        like: 0
    });
    document.getElementById("message").value= "";
}