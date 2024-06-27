//Declaration of arrays
let myArray = [];
let numbers = [7, 5, 6, 3, 2, 6, 9, 10];
let fruits = ['apple', 'banana', 'orange', 'pine-apple'];


let languages = ['Java', 'Python', 'Ruby'];

//1. push 
languages.push('JS', 'HTML');
console.log(languages)

//2. pop
console.log("Before pop:  " + numbers)
numbers.pop()
console.log("After pop:   " + numbers)

//3.shift
let first_fruit = fruits.shift();
console.log(first_fruit)
console.log(fruits)

//4.unshift

let colors = ['red', 'green'];
colors.unshift('yellow');
console.log(colors)

//5.length
console.log(colors.length)

//5. splice

let animals = ['dog', 'cat', 'bear', 'tiger'];

animals.splice(1, 1, 'elephant');

console.log(animals)

//6. slice
let pop = [1, 4, 2, 5, 8, 3];
let subset = pop.slice(2, 5);
console.log(pop);
console.log(subset);

//7. concat

let mixedArray = animals.concat(pop);

console.log(mixedArray)

//8. indexOf

console.log("indexOf 'bear' : "+animals.indexOf('bear'));


//. 9.includes

let flag = animals.includes('Tiger'.toLowerCase());
console.log("Is 'tiger' included in animals? :"+flag);


console.log("****************************")
//10. forEach
numbers.forEach(element => {
    console.log(element * 2)
});

