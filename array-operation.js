/**
 * Objective: Write a function to give me the sum of all numbers in an array
 * Step-1: Declare a function
 * Step-2: Call check whether the function is called properly
 * Step-3: Set a parameter(s)
 * Step-4: Pass the parameter(s), check whether parameters is passed in a proper format
 * Step-5: Do the function tasks (step by step)
*/

// function sumOfNumbers() {

// }

// const sum = sumOfNumbers();
// console.log("Sum of numbers is:", sum);


function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [4, 2, 1, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum);
