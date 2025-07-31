function getData(){
var user = localStorage.getItem("user");
if(!user){
    user = [];
}else{
    user = JSON.parse(user);
}
return user;
}

function signUp(){
var nameVal = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password")
var user = getData()

var details = {
    name: nameVal.value,
    email: email.value,
    password: password.value
}
user.push(details)
localStorage.setItem("user", JSON.stringify(user))
Swal.fire("account created sucessfully");
}


function login(){
var email = document.getElementById("l-email");
var password = document.getElementById("l-password")
var user = getData();
for(var i =0; i <user.length; i++){
    var userFound = {}
    if(email.value === user[i].email){
        userFound = user[i]
        break;
    }
}
if(userFound.email){
    if(userFound.password === password.value){
        Swal.fire("login scuessfully");
    }else{
        Swal.fire("invalid password");
    }
}else{
    Swal.fire("user not found");
}


}