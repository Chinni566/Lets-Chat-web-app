user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("room_name");

var firebaseConfig = {
  apiKey: "AIzaSyC-xDNPzYio4X-W57mPyEnMe4AWXL1OAY0",
  authDomain: "letchatwebapp.firebaseapp.com",
  databaseURL: "https://letchatwebapp-default-rtdb.firebaseio.com",
  projectId: "letchatwebapp",
  storageBucket: "letchatwebapp.appspot.com",
  messagingSenderId: "736958393544",
  appId: "1:736958393544:web:5eaacb48c25d3f371809fd",
  measurementId: "G-Z742CLYDPL"
  };
  
  firebase.initializeApp(firebaseConfig);

function send(){
  msg = document.getElementById("msg").value;
  console.log(room_name);
 firebase.database().ref(room_name).push({
   name:user_name,
   message : msg,
   like:0
 });

 document.getElementById("msg").value="";
}

function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
 
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png' ></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function updateLike(message_id){
console.log("click on like button -"+ message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes) +1;
console.log(update_likes)

firebase.database().ref(room_name).child(message_id).update({
 like:update_likes,
})
}
 

