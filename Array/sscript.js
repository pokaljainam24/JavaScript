// Sorting();

let arr3 = [100, 2, 5, 30, 24, 42, 20, 10000, 500]
let arr4 = arr3.sort().map(String);
console.log(arr4);

// let arr1 = [3,4,92,32,12,42,1,0]
// let arr2 = arr1.sort().map(String)
// console.log(arr2)

let arr1 = [3, 4, 92, 32, 12, 42, 10000, 0]
let arr2 = arr1.sort();
console.log(arr2)

const names6 = ["amazone", "google", "facebook", "oracle"];
const names7 = names6.sort();
console.log(names7);


// Using for loop
// This method is bubble sort
let numbers = [5, 1, 100, 380, 50, 96];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);

// Type-2
let numbers6 = [5, 1, 100, 380, 50, 96];

for (let i = 1; i < numbers.length; i++) {
    let key = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > key) {
        numbers[j + 1] = numbers[j];
        j = j - 1;
    }
    numbers[j + 1] = key;
}

console.log(numbers);

// Type-3
let arr = [5, 1, 100, 380, 50, 96];
arr.sort((a, b) => (a - b));
console.log(arr);

const arr6 = [1, 2, 3, 4, 5, 6];
arr6.splice(1, 3, 24, 45);
console.log(arr6);

// prime number

let prime = parseInt(prompt("Enter Prime Number"));
for (let i = 0; i <= prime; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log("Prime Number: " + i);
    }
}

const ComName = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const slicecompanies2 = ComName.slice(-4, -1);
console.log("Slice:", slicecompanies2);

let a = [1,2,3,4,5,6,7,8,9,7,9,2,4,8];
let b = a.length;
console.log(b);


// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
//     /**
//      * Returns the elements of an array that meet the condition specified in a callback function.
//      * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
//      * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
//      */
//     filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
//     /**
//      * Returns the elements of an array that meet the condition specified in a callback function.
//      * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
//      * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
//      */
//     filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
//     /**
//      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
//      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
//      */
//     reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//     reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
//     /**
//      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
//      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
//      */
//     reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
//     /**
//      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
//      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
//      */
//     reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//     reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
//     /**
//      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
//      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
//      */
//     reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

//     [n: number]: T;
// }