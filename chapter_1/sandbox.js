// let keyword is used for create variables.
let age = 22;
let year = 1999;

console.log(age, year);
age = 30;
console.log(age);

// const keyword used for constant variables.
const points = 100;
console.log(points);
/* this gives an error in console
points = 50;
console.log(points);
*/

//var keyword is the older way to create variables. 
var score = 75;
console.log(score);

// ************* strings *************

console.log('Hello world!');
let email = "mario@thenetninja.oc.uk";
console.log(email);

// string concatenation (joining things together)
let firstName = 'Beyza';
let lastName = 'Ata';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[3]); // 3rd character in fullName

// string lenght
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

// common string methods
let result2 = email.lastIndexOf('.');
console.log(result2); // finds last index of '.'

let result3 = email.slice(0, 10);
console.log(result3); // first 10 letters

let result4 = email.substr(4, 10); // starts with position 4 and it gets position 14. 
console.log(result4);

let result5 = email.replace('n', 'w');
console.log(result5); // replaces first n with w.

// ************* numbers *************

let radius = 10;
const pi = 3.14;
//console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);
result = radius % 3;
console.log(result); // 1

result = pi * radius**2; // 314
console.log(result);

// order of operation B I D M A S
// Brackets, indices, division, multiplication, subtraction
result = 5 * (10 - 3)**2;
console.log(result); //245

let number = 10;
number = number + 1;
number++;
console.log(number);

number--;
console.log(number);

number += 10;
console.log(number);

number /= 2;
console.log(number);

// Nan - Not a Number
console.log(5 / 'hello'); // gives Nan

result = 'the blog has ' + number + 'likes.';
console.log(result);

// ************* template strings *************
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let fin = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(fin);

// template string way (template literal)
fin = `The blog called TITLE by AUTHOR has LIKES likes`;
fin = `The blog called ${title} by ${author} has ${likes} likes`;

// creating html templates
let html = `
    <h2>${title}</h2>
    <p> By ${author}</p>
    <span> This blog has ${likes} likes </span>
`;
console.log(html);

// ************* Arrays *************
let ninjas = ['sahoun', 'ryu', 'chun-li'];
ninjas[1] = 'ken'; //override
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];

let random = ['shaun', 'crystal', 30, 25];

// console.log(ninjas.length); // 3

// ************* array methods *************
 result = ninjas.join(',');
 console.log(result); // joins elements with ','

 result = ninjas.indexOf('chun-li');
 console.log(result);

 result = ninjas.concat(['ken', 'crystal']); //concats two arrays
 console.log(result); // 5 elements

 result = ninjas.push('beyza'); // push on the a new value to the array and returns the lenght of the new array. 
 //And this method alters the original array.
 console.log(ninjas);

 result = ninjas.pop(); // it removs the last added elemnt from the array
 console.log(ninjas);
 console.log(result); // it shows the last element removed from the array. 'beyza'


 // ************* Null, Undefined *************
let name;
console.log(name, name + 7, `the name is ${name}`);
//undefined, Nan, the name is undefined

name = null;
console.log(name, name + 7, `the name is ${name}`);
// null, 7, the name is null


// ************* Booleans *************

// methods can return booleans
let mail = 'luigi@thenetninja.co.uk';
result = email.includes('@'); // look if a certain character appersas in that string
// returns true or false
console.log(result); //true

let names = ['mario', 'luigi','toad'];
result = names.includes('bowser');
console.log(result); //false

// comparison operators
age = 25;
console.log(age == 25); // true
console.log(age != 25); // false
console.log(age > 25); // false

name = 'shaun';
console.log(name == 'shaun'); // true CASE SENSITIVE
console.log(name > 'crystal'); // true first letter comes later than c (ASCII)
// lower case letters greater than upper case letters

// loose comparison (different types can still be equal)
console.log(age == '25'); // true

// strict comparison (different types cannot be equal)
console.log(age === '25'); // false
console.log(age !== '25'); // true

// ************* Type Conversion *************
score = '100';
console.log(score + 1); // 1001
score = Number(score);
console.log(score + 1); //101
console.log(typeof(score)); // Number

firstName = Number(firstName); 
console.log(firstName); // Nan

age = String(age);
console.log(age, typeof age); // 25, string

age = Boolean(age);
console.log(age, typeof(age)); // true, boolean
// positive numbers are considered a true T value in type conversion
// minus numbers are also true bu 0 is false

result = Boolean('0');
console.log(result, typeof(result)); // true, boolean strings are true
// if the string was empty this would be false