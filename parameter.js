function eatRice() {
    console.log("Wash your hands first");
    console.log("Sit in the dining table");
    console.log("Eat rice and drink water");
    console.log("Wash your hands again");
}

// eatRice();

// 3 ==> 3*3 = 9
// 4 ==> 4*4 = 16
// 5 ==> 5*5 = 25
// 11 ==> 11*11 =121


function square (number) {
    console.log(number);
    console.log("value of the number parameter", number);
    const square = number * number;
    console.log("square of the given number is: ", square);
}

square(5);
console.log("------");
square(12);
square(8);
square(69);

function add (num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

add(69, 69);
add(20, 20);
function addAll (a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}
addAll (2, 4, 6, 8);
addAll (2, 4, 6, 8, 10);