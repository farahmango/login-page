// sign in button 
var button =document.getElementById("sign");
// email input 
var email=document.getElementById("exampleInputEmail1");
// show the error msg 
var error1=document.getElementById("error1");
// phone 
var phone=document.getElementById("phone");
var error2=document.getElementById("error2");
// password 
var pass=document.getElementById("exampleInputPassword1");
var error3=document.getElementById("error3");

// valid email 
let valide=/^[a-z0-9._-]+@(gmail|yahoo).com$/;
// valid pass 
let validp= /^[A-Z]{6,18}$/i;
// valid num 
let validn=/^[0][7][7][0-9]{7}$/;

// check button 
var check=document.getElementById("exampleCheck1");

// add the event on the button 
button.addEventListener("click",form);
var error4=document.getElementById("error4");



function form(){
if (email.value==""){
    error1.innerHTML="This feild is requier";
    error1.style.color="red";

}else{

    if(email.value.match(valide)){
        error1.innerHTML="";


    }
    else{
        error1.innerHTML="email invalid";
        error1.style.color="red";
    }
}


if (phone.value==""){
    error2.innerHTML="This feild is requier";
    error2.style.color="red";

}
else{
    if(phone.value.match(validn)){
        error2.innerHTML="";


    }
    else{
        error2.innerHTML="phone invalid";
        error2.style.color="red";
    }
}
if(pass.value==""){
    error3.innerHTML="This feild is requier";
    error3.style.color="red";

}
else{
    if(pass.value.match(validp)){
        error3.innerHTML="";


    }
    else{
        error3.innerHTML="password should be 6-8 characters and contain mixed char";
        error3.style.color="red";
    }

}
if(check.checked){
    error4.innerHTML="";
 
}else{
    error4.innerHTML="should be checked";
    error4.style.color="red";

 
}
}



