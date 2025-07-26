// let cars = {
//     bmw: {
//         bmwX7: {
//             name: "BMW X7 Series",
//             model: 2024,
//             price: "PKR 2.9 crore",
//             colors: ["Blue", "Grey","Black","White"],
//             img: './x7.jpg'
//         },
//         bmwX1: {
//             name: "BMW X1",
//             model: 2024,
//             price: "PKR 3.0 crore",
//             colors: ["Grey","Black","White"],
//             img: './BMW_X1_Front.jpg'
//         },
//         bmwI4: {
//             name: "BMW i4 Series",
//             model: 2024,
//             price: "PKR 3.0-4.2 crore",
//             colors: ["Black","White", "Silver"],
//             img: './BMW_i4_-_PNG.png'
//         },
//         bmwX2: {
//             name: "BMW X2 Series",
//             model: 2024,
//             price: "PKR 3.2 crore",
//             colors: ["Black","White"],
//             img: './BMW_2_Series_Front_.jpg'
//         },
//         bmwIx3: {
//             name: "BMW iX3 Series",
//             model: 2024,
//             price: "PKR 3.3 crore",
//             colors: ["Grey","Black","White"],
//             img: './BMW_iX3_-PNG.png'
//         },
//         bmwIx: {
//             name: "BMW iX Series",
//             model: 2024,
//             price: "PKR 4.0-5.4 crore",
//             colors: ["Grey","Black","White","Off-White"],
//             img: './BMW_iX_Front.jpg'
//         },
//         bmw7: {
//             name: "BMW 7 Series",
//             model: 2024,
//             price: "PKR 6.5-23.5 crore",
//             colors: ["Grey","Silver","Black","White"],
//             img: './1.jpg'
//         }
//     },
//     hyundai: {
//         hyundaiH_100: {
//             name: "Hyundai H-100",
//             model: 2024,
//             price: "PKR 40.4-40.8 lacs",
//             colors: ["Grey","Black","White"],
//             img: './H100.jpg'
//         },
//         hyundaiElantra: {
//             name: "Hyundai Elantra",
//             model: 2024,
//             price: "PKR 64.0-69.3 lacs",
//             colors: ["Grey","Black","White"],
//             img: './elantra.jpg'
//         },
//         hyundaiSonata: {
//             name: "Hyundai Sonata",
//             model: 2024,
//             price: "PKR 99.8-1.09 lacs",
//             colors: ["Grey","Black","Blue","White"],
//             img: './Hyundai-Sonata-Front.jpg'
//         },
//         hyundaiTucson: {
//             name: "Hyundai Tucson",
//             model: 2024,
//             price: "PKR 71.7-86.6 lacs",
//             colors: ["Grey","Black","Blue","White","Red"],
//             img: './Tucson_-_PNG.png'
//         }
//     },
//     toyota: {
//         toyotaYaris: {
//             name: "Toyota Yaris",
//             model: 2024,
//             price: "PKR 71.7-86.6 core",
//             colors: ["Grey","Black","Blue","White"],
//             img: './Toyota_Yaris_Front_Right_Angled.jpg'
//         },
//         toyotaCorolla: {
//             name: "Toyota Corolla",
//             model: 2023,
//             price: "PKR 59.7-75.5 core",
//             colors: ["Grey","Black","Blue","White"],
//             img: './Corolla-X-Cars-Cropped-Pictures-for-Website.jpg'
//         },
//         toyotaCorollaCross: {
//             name: "Toyota Corolla Cross",
//             model: 2023,
//             price: "PKR 82.0-98.5 core",
//             colors: ["Grey","Black","White"],
//             img: './20200709104304_ac2.jpg'
//         },
//         toyotaRush: {
//             name: "Toyota Rush",
//             model: 2023,
//             price: "PKR 80.1-83.3 core",
//             colors: ["Grey","Black","Blue","White"],
//             img: './rush.jpg'
//         },
//         toyotaHilux: {
//             name: "Toyota Hilux",
//             model: 2023,
//             price: "PKR 1.1-1.54 core",
//             colors: ["Black","White"],
//             img: './Revo_-_PNG.png'
//         },
//         toyotaCamry: {
//             name: "Toyota Camry",
//             model: 2023,
//             price: "PKR 3.0 core",
//             colors: ["Black","White"],
//             img: './Toyota_Camry_Front.jpg'
//         },
//         toyotaLandCruiser: {
//             name: "Toyota Land Cruiser",
//             model: 2023,
//             price: "PKR 12.0 core",
//             colors: ["Black","White","Blue"],
//             img: './Land_Cruiser_300_-_PNG.png'
//         },
//         toyotaPrado: {
//             name: "Toyota Prado",
//             model: 2023,
//             price: "PKR 6.66-7.56 core",
//             colors: ["Black","White","grey"],
//             img: './PRADO.jpg'
//         },
//         toyotaVitz: {
//             name: "Toyota Vitz",
//             model: 2023,
//             price: "PKR 32.0-44.7 lacs",
//             colors: ["Black","White"],
//             img: './Toyota_Vitz_Front_Right_Angled.jpg'
//         },toyotaHiace: {
//             name: "Toyota Hiace",
//             model: 2023,
//             price: "PKR 1.31-2.1 core",
//             colors: ["Black","White","Grey"],
//             img: './hiace-cover.jpg'
//         }
//     }
// }

// // var company = prompt("enter the company here");
// // var model = prompt("enter the model here");
// // console.log(cars[company][model])

// var company = document.getElementById("company");
// var model = document.getElementById("model");

// for(var key in cars){
//     // console.log(cars[key])
// company.innerHTML += `<option value="${key}">${key}</option>`
// }

// function getCompany(){
//     model.innerHTML = ""; // Clear previous options
//     for(var key in cars[company.value]){
//         // console.log(cars[company.value][key]);
//         // Add model key as value and car name as display text
//         model.innerHTML += `<option value="${key}">${cars[company.value][key].name}</option>`;
//     }
// }

// function Students(name, email,age){
// this.name = name;
// this.email = email;
// this.age = age;
// }
// Students.prototype.getDetails = function(){
//     return this.name
// }

// var arr = [
//     new Students("minahil", "duashaikh603@gmail.com", 22),
//     new Students("maham", "maham603@gmail.com", 22),
//     new Students("bushra", "bushra603@gmail.com", 22),
//     new Students("rida", "rida603@gmail.com", 22),
// ]
// console.log(arr)

// function students(name, email){
// return {
//     name: name,
//     email: email
// }
// }
// console.log(students("minahil", "duashaikh603@gmail.com"))