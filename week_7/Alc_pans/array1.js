// const cars = ["saab", "Volvo", "BMW", "Benz", "Blacko"];

// cars.push("Princess");

// document.getElementById("demo").innerHTML = cars;

// Second practical

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("hi");

// let size = fruits.length;



// document.getElementById("demo").innerHTML = size;

// third practica;
const numbers = [4,9,16,25,29];
let first = numbers.find(myFunction);

// document.getElementById("demo").innerHTML = "First number over 18 is " + first;
document.getElementById("demo").innerHTML = "First number over 18 is " + numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}