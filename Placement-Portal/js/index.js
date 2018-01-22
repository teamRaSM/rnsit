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

    var stud = document.getElementById('studlist');
    var databaseRef = firebase.database().ref('cse/');
    function go()
    {
        var rowindex = 1;
        var e = document.getElementById("branch");
            var strbranch = e.options[e.selectedIndex].text;
            switch(strbranch)
            {
                case "CSE":$('.tr').remove();
                           var databaseRef = firebase.database().ref('cse/');
                           break;
                case "ECE":$('.tr').remove();
                           var databaseRef = firebase.database().ref('ece/');
                           break;
                case "EEE":$('.tr').remove();
                           var databaseRef = firebase.database().ref('eee/');
                           break;
                case "EIE":$('.tr').remove();
                           var databaseRef = firebase.database().ref('eie/');
                           break;
                case "MECH":$('.tr').remove();
                            var databaseRef = firebase.database().ref('mech/');
                            break;
                case "CIVIL":$('.tr').remove();
                             var databaseRef = firebase.database().ref('civil/');
                             break;
                case "MCA":$('.tr').remove();
                           var databaseRef = firebase.database().ref('mca/');
                           break;
                case "ISE":$('.tr').remove();
                           var databaseRef = firebase.database().ref('ise/');
                           break;
            }
        databaseRef.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {

                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();  //gets all the child data
                var row = stud.insertRow(rowindex);
                row.className="tr";
                var usn = row.insertCell(0);
                var Fname = row.insertCell(1);
                var Lname=row.insertCell(2); // use pointers to point to every row and print the value
                var Gender=row.insertCell(3);
                var DOB=row.insertCell(4);
                var Branch=row.insertCell(5);
                var Email=row.insertCell(6);
                var Mobile=row.insertCell(7);
                var Agg=row.insertCell(8);
                var Backlog=row.insertCell(9);
                usn.appendChild(document.createTextNode(childData.usn));//can be retrived with coressponding name value pairs
                Fname.appendChild(document.createTextNode(childData.firstname));
                Lname.appendChild(document.createTextNode(childData.lastname));
                Gender.appendChild(document.createTextNode(childData.gender));
                DOB.appendChild(document.createTextNode(childData.dob));
                Branch.appendChild(document.createTextNode(childData.branch));
                Email.appendChild(document.createTextNode(childData.email));
                Mobile.appendChild(document.createTextNode(childData.phone));
                Agg.appendChild(document.createTextNode(childData.aggregate));
                Backlog.appendChild(document.createTextNode(childData.backlog));

                rowindex = rowindex + 1;
            });
        });
    }