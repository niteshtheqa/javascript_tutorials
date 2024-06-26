var x =10;

function test(){
    var y =20;
    console.log(y)
}

console.log(x)
test()



function selectBrowser(browser){

    console.log(browser)
}
var browser = 'chrome';
var browser = 'firefox';
browser = 'safari';
selectBrowser(browser)


function addition(){
    addition = 10 + 20;
    return addition
}

console.log(addition())

/////////
var g;
g = 'value assigned here'
console.log(g);

//declare variable with let keyword
let month = 'January';
//let month = 'February';  you can't declare same variable using let keyword
month = 'March'
function print_month_of_year(){
    console.log(month)
}

print_month_of_year()

//const keyword is prevent ot modification to the existing values
const days =7;
// days = 10 TypeError: Assignment to constant variable.
console.log(days)