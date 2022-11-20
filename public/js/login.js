window.onload = loginLoad;
function loginLoad(){
	var loginbutton = document.getElementById("myLogin");
    loginbutton.onsubmit = checkLogin;	
}

function checkLogin(){
	const queryString  = window.location.search;
	const urlParams = new URLSearchParams (queryString);
	const checkusername = urlParams.get('username');
	const checkpassword  = urlParams.get('password');
	let username  = document.forms["myLogin"] ["typeusername"].value;
    let repassword = document.forms ["myLogin"] ["typepassword"].value;

	if(checkusername != username && repassword != checkpassword )
	{
		alert("Not match UserID or Password");
		return false;
	}
	else
	{
		alert("Welcome to webpage");
	}
}