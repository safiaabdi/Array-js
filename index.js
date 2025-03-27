let arr1 =[3,7,34,90,12];
let arr2 =[true,"green","where",12,56];
console.log(arr1[arr1.length - 1]);
console.log(arr2[arr2.length - 1])

let mypets= ["Cow","Bird","Snake","Dog",];
console.log(mypets.join(" ,"));

let arr3 =[-5,9,5,2,-3,6,8,4,1];
console.log(arr3.sort((a, b) => a - b)); 



let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
console.log(arr5.includes(searchWord) ? searchWord : "The search word was not found");

let word = "renniw";
console.log(word.split("").sort().join("")); 

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grape", "Pineapple", "Papaya", "Pear", "Peach", "Plum"];
fruits.splice(5, 0, "Tomato");
console.log(fruits);

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [...new Set(arr)];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(uniqueArr); 
console.log(duplicates); 
