// var box = document.getElementById("box");
// box.innerText = `Hello world`;

// console.log(box)

// function clickFun(){
// box.style.backgroundColor = "purple"
// }
// var para = document.getElementsByTagName("p");
// para[2].style.color = "blue";
// console.log(para)

var input = document.getElementById("input");
var list = document.getElementById("list");
function inputVal(){
    // console.log(event.keyCode);
    if(event.keyCode === 13){
list.innerHTML += `<li>${input.value}</li>`; 
input.value = " ";
    }

}