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