// Arrow function num is variable and square is variable to store result

//1 Paramter arrow function
const square = num => num * num;

let result = square(3);

console.log(result)

//No Parameter Arrow function
const msg = () => 'Hello JavaScript!!!'

console.log(msg())


// 2 parameter arrow function

const addition = (a, b) => a + b;
console.log(addition(1, 3))

//


const person = {
    firstName: 'John',
    lastName: 'Doe'
}

const getFullname = (person) => '${person.firstName} ${person.lastName}'

const fullname = getFullname(person);

console.log(fullname);

//
