// let result;

// fetch('https://fakestoreapi.com/products')
// .then((res)=> res.json())
// .then(res=> result = res)


// setTimeout(()=>{
//     console.log(result)
// },5000)



//     console.log("hello world")
//    for(i=0; i <=10; i++){
//     console.log(i)
//    }
//     console.log("sayalni")



// let getData = (cb)=>{
//     fetch('https://fakestoreapi.com/products')
// .then((res)=> res.json())
// .then(res=> cb(res))
// }

// // let cb = (data)=>{
// // console.log("data", data)

// // }
// // getData(cb)
// let conatiner = document.getElementById("conatiner")

// getData((data)=>{
// data.forEach((products) => {
//     console.log(products)
//     conatiner.innerHTML += `
//     <div class="card mt-5" style="width: 18rem;">
//   <img src="${products.image}" class="card-img-top img" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${products.title}</h5>
//     <p class="card-text">${products.category}</p>
//     <p class="card-text">${products.description.slice(0,80)}...</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     `
// });
// })

let allProducts = [];
let getData = ()=>{
    fetch('https://fakestoreapi.com/products')
.then((res)=> res.json())
.then(res=>{
    allProducts = res;
    
    productUi(allProducts)
})
}

let conatiner = document.getElementById("conatiner")

let productUi = (data)=>{
 conatiner.innerHTML = "";
    // console.log(data, "products")
data.forEach((products) => {
   let {image, title, category, description} = products;
    // console.log(products)
    conatiner.innerHTML += `
    <div class="card mt-5" style="width: 18rem;">
  <img src="${image}" class="card-img-top img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${category}</p>
    <p class="card-text">${description.slice(0,80)}...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
});
}
getData()

let searchBar = document.getElementById("searchBar")
let searchBtn = ()=>{
    // console.log(searchBar.value.toLowerCase())
    let searchVal = searchBar.value.toLowerCase()
    let filteredProducts = allProducts.filter((products)=>{
     return products.title.toLowerCase().includes(searchVal) ||
      products.category.toLowerCase().includes(searchVal)
    })
productUi(filteredProducts)
}

// let arr = ["apple", "mango", "orangge"]
// console.log(arr.includes("grapes"))