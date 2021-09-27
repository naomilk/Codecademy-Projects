// Created a variable which can't be changed, set to 293
const kelvin = 293;

// Created a variable which can't be changed, set to the numerical value of kelvin less 273
const celsius = kelvin - 273;

//Created an amendable variable, calculating fahrenheit based off celsius
let fahrenheit = celsius * (9/5) + 32;

//Saving a new value to our fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

//Created a variable which can't be changed, calculating celsius but on the Newton scale
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees on the Newton scale.`)