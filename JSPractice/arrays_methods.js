let numbers = [1, 2, 3];
let doubledArray = numbers.map((element) => element * 2);

console.log(doubledArray)

//Convert Fareheihgt to Celcius

// (F-32) * (5/9)

let fahTemp = [31, 102, 104, 230];

function fahToCelcius(fah) {
    return (fah - 32) * (5 / 9);
}

let celciusTemp = fahTemp.map(fahToCelcius);


console.log(celciusTemp);


//filter()

let integers = [2, 1, 3, 4, 5, 6, 8, 7, 9, 10];

let even_integers = integers.filter((e) => e % 2 === 0);

console.log(even_integers);

//
let employees = [
    { name: 'John', age: 30, gender: "Male" },
    { name: 'Trisha', age: 20, gender: "Female" },
    { name: 'De, Cock', age: 55, gender: "Male" }
];

let mail_employee = employees.filter((employee) => employee.gender === 'Female' && employee.age < 30);
console.log(mail_employee);


//reduce()
let numb = [1,2,3,4,5];
let result = numb.reduce((accumalotr, number) => accumalotr += number);

console.log(result)