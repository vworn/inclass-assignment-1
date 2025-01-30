// Task 1

let expenses = 5000; // Declare variable

if (expenses > 7000) {
    console.log("High Expenses")
    // If expenses are over 7000 -> High
} else {
    // If expenses otherwise -> Manageable
    console.log("Managable Expenses")
}

//Task 2

for (let i = 10; i >= 1; i--) {
    console.log[i];
    
}

// Task 3

let num=2;
while (num <= 10) {
    console.log(num) ;
    num += 2;
}

//Task 4

function calculatesquare(num) {
    return num * num
}
console.log(calculatesquare(4));

//Task 5

const doublenumber = num => num * 2;
console.log(doublenumber(7));

//Task 6

const numbers = [3, 6, 9];
const doubled = num.map(num => num * 2);
console.log(doubled);