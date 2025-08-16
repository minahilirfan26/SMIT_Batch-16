// ***Advanced Javascript (All ES Versions)***
// Variable Scoping
// var a;
// console.log(a)
// var a = "hello world";
// a = "smit"

//  a = "hello world";
// const a = "smit";
//     const a = "hello world";
//     a = "smit";
//     console.log(a)

// Closure

// function abc(){
//     var a = 123;
//     //window
//     //abc()
//     //a
//     function efg(){
//         //window 
//         //efg()
//         //abc()
//         //a
//         function jkl(){
//             //window
//             //jkl;
//             //efg
//             //abc
//             //a
//         }
//         jkl()
//     }
//     efg()
// }
// abc()

//Template literals

// let para = `<p>Hello world</p>`;
// console.log(para)



//Destructuring
// let obj = {
//     name: "Minahil",
//     email: "duashaikh603@gmail.com",
//     getDetails: function(){
//         return "hello world"
//     },

//     courseDetails: {
//         course: "web",
//         school: "SMIT"
//     }
// }
// let email = "dua@gmail.com";
// let {name, email: myEmail, courseDetails:{course, school}, getDetails} = obj;
// // let {course, school} = obj.courseDetails;
// console.log(getDetails())

// let arr = ["Mon", "tues", "wednes"]

// let [a,b,c] = arr;
// console.log(b)


///Default parameters

// function abc(a = "smit" ){
// console.log(a)
// }
// abc()


//Rest parameter

// function abc(a , ...rest){
// console.log(a,  rest)
// }
// abc("SMIT","malir", "TTS", "web")

//Spread Operator
// let studentDetails = {
//     name: "Zunaira",
//     email: "zunainra"
// }
// let campusDetails = {
//     campus: "malir",
//     school: "SMIT"
// }

// let obj = {...studentDetails, ...campusDetails}
// console.log(obj)


// let obj = {
//     name: "minahil",
//     email: "duashaikh603@gmail.com",
//     age: 22,
//     getDetails: {
//         course: "web",
//         school: "SMIT"
//     }
// }

// // console.log(obj.name)
// // console.log(obj.email)
// let {name, email, age, getDetails: {course, school}} = obj;
// // let {course, school} = obj.getDetails;
// console.log(school)

// let arr = ["mon", "tues", "wed"];
// let [a,b,c] = arr
// console.log(c)


///Enhanced object literals

// let obj = {
//     name: "minahil",
//     email: "duashaikh603@gmail.com",
//     age: 22,
//     course: "WEb & app"
// }

// console.log(obj?.getDetails?.course)
// console.log(obj.name)

// function clickFun(){
//     alert("hello world")
// }
// let btn = document.getElementById("btn");
// btn.addEventListener("click", clickFun)
// console.log(btn)


//CallBack

// function abc(cb){
//     setTimeout(function(){
//         console.log("done")
//         cb()
//     },2000)
// }

// function callBackFun(){
//     console.log("Completed")
// }

// abc(callBackFun)


// let abc = ()=>{
//     console.log(336)
// }
// abc()