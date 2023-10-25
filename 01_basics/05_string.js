"hello" +"world" //concatenation

const name = "shivam"
const repoCount = 50

console.log(name +repoCount +"value");//this is very old dtyle to add or cancatenate
//Instead of above line we use this 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivam')//object of js

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)//we can,t give here negative value (-8,2) like that

// console.log(newString);

// const anotherString = gameName.slice(-8,4)
//but here we can use negative value


//to trim the variable
const newStringOne = "   shivam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%20singh"

console.log(url.replace('%20','-'));

console.log(url.includes('shivam'));



