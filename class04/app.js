//Prompts
// var num = +prompt("enter your fav num");
// console.log(num * 2);

//If-Statements
// if(4>2){
//     console.log("you are allow")
// }

//Comparison operators
// var city = prompt("enter your city");
// if(city === "karachi"){
//     console.log("Welcome to " + city)
// }


// var age = prompt("enter your age");
// if (age != 20) {
//     console.log("you are allow");
// }

// var age = +prompt("enter your age");
// if (age >= 20) {
//     console.log("you are allow");
// }


//if...else- Statements
// var age = +prompt("enter your age");
// if (age >= 20) {
//     console.log("you are allow");
// }else{
//     console.log("you are not allow")
// }

//if...else and else if statements
// var city = prompt("enter your city");
// if(city === "karachi"){
//     console.log("welcome to city of lights")
// }else if(city === "lahore"){
//     console.log("welcome to city of garden")
// }else if(city === "peshawar"){
//     console.log("welcome to city of flowers")
// }else{
//     console.log(city);
// }


//Testing sets of conditions
//*** && ***
// var age = 18;
// var city = "lahore";

// if(age === 18 && city === "karachi"){
//     console.log("you are allow");
// }else{
//     console.log("you are not allow");
// }

//*** || ***
// var age = 19;
// var city = "karachi";

// if(age === 19 || city === "lahore"){
//     console.log("you are allow");
// }else{
//     console.log("you are not allow");
// }


//if statements nested
var city = prompt("enter your city");

 if(city === "karachi"){
    var age = +prompt("enter your age");
    if(age === 18){
        console.log("you are allow");
    }else{
        console.log("you are not allow");
    }
 }else{
    console.log("just for karachi users");
 }

