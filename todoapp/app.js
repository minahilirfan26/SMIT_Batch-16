// var word = prompt("enter a palindrome word"); // minahil
// var wordBox = "";

// //wow 3 - 1= 2 -1 = 1 -1 =0
// for(var i = word.length -1; i >= 0; i--){
//     //lihanim
//     wordBox += word[i]; 
// }

//   if(word === wordBox){
//         console.log(" it's a palindrom word")
//     }else{
//         console.log("its not a palindrome word", wordBox);
//     }

// var zip = document.getElementById("zip");
// var city = document.getElementById("city");

// function zipCity(){
// switch (Number(zip.value)){
//     case 1:
//         city.value = "Karachi";
//         break
//     case 2:
//         city.value = "lahore";
//         break;
//     case 3:
//         city.value = "Islamabad";
//         break
//     default:
//         city.value = "please enter your city zip code"
// }
// }

//TODO list

var todoInput = document.getElementById("todoInput");
var list = document.getElementById("list");
var li = document.getElementById("li");
function addTodo(){
var inputVal = todoInput.value;
list.innerHTML += `<li id='li'>${inputVal}
<button onclick="deleteBtn()">Delete</button>
</li>`;
todoInput.value = "";
}


function deleteAll(){
    list.innerHTML = "";
}