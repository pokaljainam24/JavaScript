// Sorting();

let arr3 = [100,2,5,30,24,42,20,10000,500]
let arr4 = arr3.sort().map(String);
console.log(arr4);

// let arr1 = [3,4,92,32,12,42,1,0]
// let arr2 = arr1.sort().map(String)
// console.log(arr2)

let arr1 = [3,4,92,32,12,42,10000,0]
let arr2 = arr1.sort();
console.log(arr2)

const names6 = ["amazone","google","facebook","oracle"];
const names7 = names6.sort();
console.log(names7);


// Using for loop
// This method is bubble sort
let numbers = [5,1,100,380,50,96];

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
arr.sort((a, b)=>(a-b));
console.log(arr);
