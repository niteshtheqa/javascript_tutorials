function is_eleigible_for_vote(age) {

    if (age > 18) {
        console.log("Your age is: " + age)
        console.log("You're eligible to vote\n\n");
    } else {
        console.log("Your age is: " + age)
        console.log("Sorry, you're not eligible\n\n")
    }
}

is_eleigible_for_vote(19)

is_eleigible_for_vote(15)

is_eleigible_for_vote(89)


//multiple if..else statements

function checkNumber(number) {
    if (number > 0) {
        console.log(number + " is +ve");
    } else if (number < 0) {
        console.log(number + " is -ve")
    } else {
        console.log("zero number found")
    }
}

checkNumber(10)
checkNumber(0)
checkNumber(-10)


//Nested if..else

function checkGrade(score) {
    let grade;
    if (score > 90) {
        grade = 'A';
    } else {
        if (score > 80) {
            grade = 'B';
        } else {
            if (score >= 70) {
                grade = 'C';
            }else{
                grade='D';
            }
        }
    }
    return grade;
}

console.log(checkGrade(60))

console.log(checkGrade(96))

console.log(checkGrade(85))