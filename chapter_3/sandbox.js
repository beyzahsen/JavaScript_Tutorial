// function expression
// JavaScript does not hoist function expressions only function declarations
const speak = function(){
    console.log('Good day!');
};

greet();
speak();

// function declaration
function greet(){
    console.log('Hello there');
}

// ****** arguments and parameters ******
const speak2 = function(name = 'Beyza', time = 'night'){
    console.log(`Good ${time} ${name}!`);
}
speak2();
speak2('Ahsen', 'morning');

// ****** returning values ******
const calcArea = function(radius){
    return 3.14 * radius ** 2;
};

const area = calcArea(4);
console.log(area);

// regular function
// *calcArea function is a regular function*

// arrow function
const calcArea1 = radius => { // if we have exactly one parameter we can remove parantheses
    return 3.14 * radius ** 2;
};
const area1 = calcArea1(4);
console.log(`The area is (with arrow function) ${area1}`);

const func = () => {}; // no parameter, we should use parantheses

const calcArea2 = radius => 3.14 * radius ** 2; // returns the value


// practise arrow functions
const greet1 = () => 'Hello there..';
console.log(greet1());


const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }

    return total;
};

const bill1 = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }

    return total;
};
console.log(bill([10, 15, 30], 0.8));
console.log(bill1([10, 15, 30], 0.8));


const name = 'shaun';
// functions 
const greet2 = () => 'hello!';

let resultOne = greet2();
console.log(resultOne);

// methods 
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

// we call the myFunc function here
myFunc(function(value){
    // do something
    console.log(value);
});

myFunc(value =>{
    // do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'beyza'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person} `);
};

people.forEach(logPerson);


// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people1 = ['mario', 'luigi', 'ryu', 'shaun', 'beyza'];

let html = ``;

people1.forEach(person =>{
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;