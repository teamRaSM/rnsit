$(document).ready(function() {
    Materialize.updateTextFields();
  });
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3pyNyxubRdZQC2o2PrCeDjezUR7e0tHs",
    authDomain: "student-portal-80bf3.firebaseapp.com",
    databaseURL: "https://student-portal-80bf3.firebaseio.com",
    projectId: "student-portal-80bf3",
    storageBucket: "student-portal-80bf3.appspot.com",
    messagingSenderId: "725991009345"
  };
  firebase.initializeApp(config);

/* log in starts here*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) 
  {
    // User is signed in.
    window.location="home.html"
    alert("Logged in successfully");

  } 
});
function create(){
      var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
});
}
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  alert("Logged out successfully");
  window.location="index.html"
}
/* login ends hrer ................*/