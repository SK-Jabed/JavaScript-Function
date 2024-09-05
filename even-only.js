/**
 * Create function that will return only the even numbers
 * Return the sum of even numbers
*/

function evenNumbersOnly(numbers) {  
    const evens = []; 
    for(const number of numbers) {
        if(number % 2 ===0) {
            console.log(number);
            evens.push(number);           
        }    
    }
    return evens
}

const numbers = [5, 10, 15, 20, 25, 30, 35, 40];
const evens = evenNumbersOnly(numbers);

console.log("Even numbers are", evens);


function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        if(number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);

console.log("Sum of the even numbers is:", sum);
