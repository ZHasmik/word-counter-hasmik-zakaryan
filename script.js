const textarea = document.querySelector(".user__string");
let arr = textarea.innerHTML.split(' ');
console.log(arr.length);
const words = document.querySelector("#words");
const spaces = document.querySelector("#spaces");
const letters = document.querySelector("#letters");
const sentences = document.querySelector("#sentences");



// function countSpaces() {
//     let counter = 0;
//     for (let el of arr){
//         if (el !== null) {
//             continue;
//         } else {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countSpaces());