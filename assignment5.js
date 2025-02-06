// **Assignment 5: Callback Functions with map(), filter(), and **reduce()
// Task: Create a processData function that accepts an array of numbers and a callback.
// If the callback is filterOdd, filter out even numbers.
// If the callback is doubleNumbers, double each number.
// If the callback is calculateSum, return the sum of all numbers. Bonus Task: Implement a callback to find the maximum number in the array.

const processData = (numArray,callBackFunction)=>{
    if(callBackFunction === filterOdd){
        console.log("Filtering");
        console.log(numArray.filter(callBackFunction));
    }
    else if(callBackFunction === doubleNumbers){ 
        console.log("Doubling the numbers");
        console.log(numArray.map(callBackFunction));
    }
    else if(callBackFunction === calculateSum){ 
        console.log("Calculate Sum");
        console.log(numArray.reduce(callBackFunction,0));
    }
    else if(callBackFunction === getMax){ 
        console.log("The maximum value in the array");
        console.log(numArray.reduce(callBackFunction,numArray[0]));
    }
    else if(callBackFunction===undefined){
        console.log("invalid Callback function");
    }
    else{
        console.log("invalid");
    }
}

const filterOdd = (num) => {return num%2!=0 }
const doubleNumbers = (num) => {return num*2 };
const calculateSum = (accumulator,num) => accumulator+num;
const getMax = (accumulator,num) => (accumulator > num)?accumulator:num;

const arr1 = [5,2,67,1,7,9,3,5];
processData(arr1,filterOdd)
processData(arr1,doubleNumbers)
processData(arr1,calculateSum)
processData(arr1,getMax)
