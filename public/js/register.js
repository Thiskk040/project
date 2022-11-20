window.onload = pageLoad;

function pageLoad(){
    var clickbutton = document.getElementById("myform");
    clickbutton.onsubmit = validateform;

	
}

function validateform(){
	var password = document.forms["myform"] ["password"].value;
    var repassword = document.forms["myform"] ["repassword"].value;

    if(password != repassword)
    {
        alert("Your password in not validate");
        return false;
    }
    else
    {
        alert("Validate correct");

    }
}
