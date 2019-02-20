
//for loop
//Use a for loop to console.log each item in the array carsInReverse.

let carsInReverse = ["toyota", "ford", "chevy", "subaru", "jeep"]

for (let i =0; i<carsInReverse.length; i++) {
    console.log(carsInReverse[i])
}


//for...in loop
//Create an object (an array with keys and values) called persons with the following data:
//firstName: "Jane"
//lastName: "Doe"
//birthDate: "Jan 5, 1925"
//gender: "female"

let persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


//Use a for...in loop to console.log each key.
for (let key in persons) {
    console.log(key)
}

//Then use a for...in loop and if state to console.log the value associated with the key birthDate.

for (key in persons) {
    if (persons[key] == "Jan 5, 1925") {
        console.log ("this date is the value")
    }
}
for (key in persons) {
    console.log(persons[key])
}



//while loop
//Use a for loop to console.log the numbers 1 to 1000.
let num = 0;
while (num < 1000) {
    num ++;
    console.log(num)
}


//do...while loop
//Use a do...while loop to console.log the numbers from 1 to 1000. 
let numm = 0;
do {
  numm +++
  console.log(numm);
} while (numm < 1000);

