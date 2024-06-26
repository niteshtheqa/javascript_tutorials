function print_numbers(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}


print_numbers(10)

console.log("******************************\n\n\n")
//for...of loop

const intArray = [1, 2, 3, 2, 5, 6, 1, 9, 7, 8];
for (const e of intArray) {
    console.log(e);

}

//
console.log("******************************\n\n\n")
for (let i = 0; i <= intArray.length; i++) {
    if (intArray[i] % 3 == 0) {
        console.log(intArray[i]);
    }
}

// While loop
console.log('************ While Loop ******************\n\n\n\n\n');
//print number 1..10

let i = 0;
while (i < 10) {
    console.log(i);
    //++i;
    i += 1;
}
console.log("******************************\n\n\n")
//
let l = 2;
while (l <= 10) {
    console.log(l);
    l += 2;
}

console.log("******************************\n\n\n")

//do..while loop
let num = 1;
do {
    console.log(num);
    num += 1;

} while (num >= 10);
console.log("******************************\n\n\n")
console.log("for of loop")

const browser = ['chrome', 'firefox', 'edge', 'safari', 'opera'];
for (const i of browser) {
    if (i == 'opera') {
        console.log('Lanching ' + i);
    }
}

console.log("******************************\n\n\n")
console.log("for loop to iterate over user object")

const user = {
    name: "John Doe",
    age: 32,
    city: "Vienna"
}

for (const key in user) {
    console.log(key + " ==> " + user[key]);
}