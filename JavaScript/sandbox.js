let age = 25;
let year = 2019;

console.log(age,year);

age = 30;

const points = 100; 
console.log(points);
//points = 50;
//will make error becoz const used for unrewritten var;

var score = 75;
//var is a older way
console.log(score);

//JS Data Types
//num 1,2,3,100,3.14
//strings "anythings" "pwky168@hotmail.com"
//boolean true/false
//null set a variable with no vaule
//undefined for variables that have not yet been defined
//Object Somethings to call :) arrays,dates
//symbol used with object

//strings
console.log('hihi');
let email = 'pwky168@hotmail.com';
console.log(email);

//strings concatenation
let firstname = "PakWing";
let lastname = " Ma";

let fullname = firstname + lastname;
console.log(fullname);

//getting charaters 
console.log(firstname[0]);

//strings length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
//.toUpperCase()
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf('@');
console.log(index);

//common string methods

let myemail = 'pwky168@hotmail.com';

//let myresult = myemail.lastIndexOf('l');
//console.log(myresult);

let myresult = myemail.slice(0,10);
console.log(myresult);