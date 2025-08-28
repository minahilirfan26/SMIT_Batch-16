let arr = [{name: "Minahil", course: "web", fee: 5000},{name: "iqra", course: "web", fee: 9000},{name: "ayesha", course: "web", fee: 8000}]

// let result = arr.some(function(elem, i , allelem){
//   return elem.courses
// })
// console.log(result)

// let result = arr.reduce(function(a, elem){
// return a + elem.fee
// },0)
// console.log(result)

function abc(){
// return a
console.log(arguments)
}

abc(2, 7)

// console.log(abc(2, 7))

// let abc = a=> a + 100 ;

// console.log(abc(2))

// let obj = {
//     name: "Minahil",
//      course: "web", 
//      fee: 5000,
//      getDetails: ()=>{
//       return ()=>{
//         console.log(this)
//        }
//      }
// }
// obj.getDetails()()


//CLass

// class Campus{
//     constructor(location, city){
//         this.location = location;
//         this.city = city
//     }
// }

// class Students extends Campus {
//     constructor (name, course, phone) {
//         super("MALIR", "karachi")
//         this.name = name;
//         this.course = course;
//         this.phone = phone
//     }
// }
// console.log(new Students("Minahil", "web", "6729989"))