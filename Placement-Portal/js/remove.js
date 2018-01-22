$(document).ready(function() {
    Materialize.updateTextFields();
  });
 // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAqIvSVJoknpvLJHG6Qn0om0JDfGVgJqdE",
    authDomain: "webapp-faf2d.firebaseapp.com",
    databaseURL: "https://webapp-faf2d.firebaseio.com",
    projectId: "webapp-faf2d",
    storageBucket: "webapp-faf2d.appspot.com",
    messagingSenderId: "294281955476"
    };
    firebase.initializeApp(config);

    var databaseRef = firebase.database().ref('message/');
    var db='/message/';
    function remove_msg()
    {
        var title = document.getElementById('title').value.toUpperCase();
        firebase.database().ref().child(db + title).remove();
            alert('successfully Removed');
            reload_page();
    }
function reload_page() {
    window.location.reload();
   }