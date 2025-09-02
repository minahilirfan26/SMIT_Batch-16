
let getData = (cb)=>{
    fetch('https://fakestoreapi.com/products')
.then(res=> res.json())
.then((res)=> {
    return cb(res)
})
}


let container = document.getElementById("container")
getData((res)=>{
    
res.forEach((product)=>{
    console.log(product)
    container.innerHTML += `
    <div class="card cards" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title.slice(0,20)}</h5>
    <p class="card-text">${product.
description.slice(0,90)}...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
})
})


// let data = (res)=>{
// console.log(res)
// }
// getData(data)


// setTimeout(()=>{
//     console.log(result)
// },5000)
// let a = "minahil";
// let c = "minah"

// setTimeout(
//     ()=>{
//         console.log(b)
//     }, 2000)
// console.log(a)

// console.log(c)