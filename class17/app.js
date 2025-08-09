// ***Advanced Javascript (All ES Versions)***
// Variable Scoping

// var a;
// console.log(a)
//  a = "hello world";
// const a = "smit";
    // const a = "hello world";
    // a = "smit";
    // console.log(a)

// Closure

// function abc(){
//     ///window
//     //abc()
//     //a
//     var a = "smit";
//     function xyz(){
//         //xyz()
//         //window
//         //abc()
//         //a
//         console.log(a)
//         function jkl(){
//             //window
//             //abc
//             //xyz
//             //jkl
//             //a
//         }
//     }
// xyz()
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

// function abc(a = "saylani"){
// console.log(a)
// }
// abc("SMIT")


//Rest parameter

// function abc(a = "saylani",  ...rest){
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