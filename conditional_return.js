function isEven(number) {
    if (number % 2 ===0){
        return true;
    }
    else {
        return false
    }
}

console.log(isEven(52));
console.log(isEven(69));

function isOdd (number) {
    if (number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(10));
console.log(isOdd(69));