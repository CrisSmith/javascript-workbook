

// Write a JavaScript program to display the current day and time.


const dateFunc = (day, time) => {
    console.log("Today is: " + day + ", the time is now: " + time)
}

dateFunc("Thursday","7:00pm")

//Write a JavaScript program to convert a number to a string.

const functionX = (num1)=> {
    if (typeof num1 === 'number'){ 
      return num1.toString()
    }
  }
 functionX(6);


//  Write a JavaScript program to convert a string to the number.

const convStringFunction = (arg1)=> {
    return parseInt(arg1);
}
convStringFunction('109');

/* Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String */


const checkTypeFunction = (myDatatype) => {

if(typeof myDatatype === 'boolean') {
    console.log('Boolean');
};
if (typeof myDatatype === 'null') {
    console.log('Null');
};
if (typeof myDatatype === 'undefined') {
    console.log('Undefined');
};

if (typeof myDatatype === 'number') {
    console.log('Number');
};
if (typeof myDatatype === NaN) {
    console.log('NaN');
};

if (typeof myDatatype === 'string') {
        console.log('String');
    }

}

checkTypeFunction('cat');



// Write a JavaScript program that adds 2 numbers together.

const addFunction = (num1, num2) => {
    return num1 + num2;
}
addFunction (6,7);

//Write a JavaScript program that runs only when 2 things are true.

const trueFunction = (arg1, arg2) => {
if (arg1 && arg2) {
    return 'both are true'
 } 
}
trueFunction('cat',6);


//Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrueFunction = (arg1, arg2) => {
    if ( arg1 || arg2 === true) {
        return 'one is true'
    }
}
oneTrueFunction('cat',0)


//Write a JavaScript program that runs when both things are not true. */ 

const notTrueFunction = (arg1, arg2) => {
    if (arg1 && arg2 != true) {
        return 'both are false'
     } 
     
    }
    notTrueFunction(0,0);
