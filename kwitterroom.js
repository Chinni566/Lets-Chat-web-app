

var firebaseConfig = {
  apiKey: "AIzaSyC-xDNPzYio4X-W57mPyEnMe4AWXL1OAY0",
  authDomain: "letchatwebapp.firebaseapp.com",
  projectId: "letchatwebapp",
  storageBucket: "letchatwebapp.appspot.com",
  messagingSenderId: "736958393544",
  appId: "1:736958393544:web:6610c755768bc5091809fd"
  };
  
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitterroom.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    //End code
    });});}
getData();
