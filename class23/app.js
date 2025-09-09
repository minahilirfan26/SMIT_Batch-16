// let data = new Promise((reslove, reject)=>{
//    fetch('https://fakestoreapi.com/products')
// .then((res)=> res.json())
// .then(res=> reslove(res))
// .catch(err=> reject(err))
// })

// data
// .then(res => console.log(res))
// .catch(err=> console.error(err))

// let getData = async ()=>{
// try{
//     let products = await data;
// console.log(products)
// }catch(err){
//     console.error(err)
// }
// }
// getData()



let getProducts = ()=>{
return new Promise((reslove, reject)=>{
   fetch('https://fakestoreapi.com/products')
.then( async(res)=> await reslove(res.json()))
.catch(err=> reject(err))
})
} 

let getUsers = ()=>{
return new Promise((reslove, reject)=>{
   fetch('https://fakestoreapi.com/users')
.then((res)=> res.json())
.then(res=> reslove(res))
.catch(err=> reject(err))
})
} 

// getUsers()
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))

let getData = async ()=>{
try{
    let promises = [];
    promises.push(getProducts(), getUsers())
    let finalResult = await Promise.all(promises)
    console.log(finalResult)
//     let products = await getProducts();
//     let users = await getUsers()
// console.log(products, users)
}catch(err){
    console.error(err)
}
}
getData()


