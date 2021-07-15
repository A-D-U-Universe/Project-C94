
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDiuXi4dDRrHnwr8MkpU5tafIPK72Z6E9Y",
      authDomain: "kwitter-project-ccf72.firebaseapp.com",
      projectId: "kwitter-project-ccf72",
      storageBucket: "kwitter-project-ccf72.appspot.com",
      messagingSenderId: "1076678121203",
      appId: "1:1076678121203:web:a289948e55cbb301250986"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
