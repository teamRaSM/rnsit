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
    function send_msg()
    {
        var title = document.getElementById('title').value.toUpperCase();
        var msg = document.getElementById('msg').value;
        var date=new Date();
        date.getTime();
        var data = {
                title:title,
                message:msg,
                date:date.toString()
            }

            var updates = {};
            updates[db + title] = data;            // + usn makes it a primary key.
            firebase.database().ref().update(updates);
            alert('successfully Pushed');
            reload_page();
    }
function reload_page() {
    window.location.reload();
   }