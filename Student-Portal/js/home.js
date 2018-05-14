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

    function logout(){
  firebase.auth().signOut();
  window.location="index.html"
}
/*document.getElementById('registercard').onclick=function() {
	window.location="studcreate.html"
}
document.getElementById('uinfocard').onclick=function() {
    window.location="studupdate.html"
}*/
document.getElementById('updatescard').onclick=function() {
    window.location="view.html"
}
