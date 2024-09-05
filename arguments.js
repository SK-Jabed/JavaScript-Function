function doubleIt (number) {
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log("I will call the function");
doubleIt(15);
console.log("---------------");
doubleIt(69);
console.log("---------------");
doubleIt(6969);

const number = 55;
doubleIt(number);
const money = 5000;
doubleIt(money);


function difference (num1, num2) {
    const diff = num1 - num2;
    console.log(num1, num2, "Difference is:", diff);
}
const fatherAge = 45;
const myAge = 18;

difference(fatherAge, myAge);