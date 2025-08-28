// function abc(cb, ){
//     setTimeout(function(){
//         console.log("done")
//         cb()
//     },5000)
// }

// function xyz(){
//     console.log("completed")
// }

// abc(xyz)


let arr = [
    {
        name: "minahil",
        age: 22,
        city: "karachi"
    },
    {
        name: "maham",
        age: 22,
        city: "karachi"
    },
      {
        name: "madiha",
        age: 20,
        city: "lahore"
    }
]

let result = arr.findIndex((elem)=>{
return elem.name === "maham"
})
console.log(result)

// let result = arr.filter((elem)=>{
// return elem.age === 22 && elem.city === "karachi"
// })
// console.log(result)


// let result = arr.forEach((elem, i, allArr)=>{
//   return  elem, i, allArr
// })
// console.log(result)

// let result = arr.map(function(elem){
// return `${elem}  SMIT`
// })
// console.log(result)



