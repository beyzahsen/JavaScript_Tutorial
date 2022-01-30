// ******** for loops ********

for(let i = 0; i < 5; i++){
    console.log('in loop: '+i);
}
console.log('loop finished.');


const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// ******** while loops ********

let  i = 0
while(i < 5){
    console.log(i);
    i++;
}

let j = 0
while(j < names.length){
    console.log(names[j]);
    j++;
}

// ******** do while loops ********

i = 5
do{
    console.log('val of i is: ', i);
    i++;
}while(i < 5);

// ******** if statements ********

const age = 25;

if(age > 20){
    console.log('you are over 20 years old.');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}

const password = 'pass';

if(password.length >= 8){
    console.log('that password is long enough.');
}
else{
    console.log("that password is not long enough.");
}


let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
        // ignore the rest of the code inside the code block for this loop but continue to the next iteration
    }

    console.log('your score is: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

// ******** switch statements ********

const grade = 'C';

switch (grade){

    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    default:
        console.log('not a valid grade.');
}

// ******* variables & block scope *******

const num = 30;

if(true){
    const num = 40;
    const name = 'shaun';
    console.log('inside code block: ', num, name);

    if(true){
        console.log('inside second code block: ', num);
        var test = 'hello';
        // var ignores block scope
    }
}

console.log('outside code block: ', num, name, test);