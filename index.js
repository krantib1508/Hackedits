firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
function signup()
{location.href="F:\10th cbse\Game of Thrones"}

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
}
var preobject = document.getElementById('email_field');
//Create references
const dbRefObject = firebase.database().ref().child('text');
//Sync object changes
dbRefObject.on('value', snap => console.log(snap.val()));

function Session() {}

Session.prototype.init = function() {
  console.log('inside Session.init()');

  //capturing all click, touch and keypress events
	window.addEventListener('touchstart',Timeout,false);
	window.addEventListener('click',Timeout,false);
	window.addEventListener('keypress', Timeout, false);

	function _timeout(){
		return function() {
      close()
			//implement your logic here to make
      //a server side call (REST maybe?)
      //that kills the server side sessiom
		}	
	}
	function Timeout() {
	console.log('inside goTimeout()');
		if(typeof(timer) != 'undefined'){
			console.log("clearing timer");
			timer = clearTimeout(timer,); //reset as soon as something is clickedzz
		}
		timer = setTimeout(_timeout(), 300000);
	}
}

var sessionTimeout = new Session();
sessionTimeout.init();