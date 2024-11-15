//  -------------    SURPRISE TEST QUETIONS   -----------------    //


// prime number

for(let i=0; i<=50; i++){
    let count=0;
    for(let j=0; j<=i; j++){
        if(i%j == 0){
            count++;
        }
    }
    if(count === 2){
        console.log("prime number:",i)
    }
}

// factorial

let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact *= i;
    console.log(fact);
}

// revers string manipulate

// let str = "Hello, World!";
// let reversed = str.split("").reverse().join("");
// console.log(reversed); // Output: "!dlroW ,olleH"

// without method

// let str = "Hello, World!";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }
// console.log(reversed); // Output: "!dlroW ,olleH"

// duplicate array

// let arr = [1, 2, 3, 4, 5];
// let duplicate = [...arr, ...arr];
// console.log(duplicate); // Output: [1, 2, 3, 4, 5]

// without JAVASCRIPT method

// let arr = [1, 2, 3, 4, 5];
// let duplicate = [];
// for (let i = 0; i < arr.length; i++) {
//     duplicate.push(arr[i]);
//     duplicate.push(arr[i]);
// }
// console.log(duplicate);


// let arr = [1, 2, 3, 4, 5];
// let duplicate = arr.concat(arr);
// console.log(duplicate);

// reverse array using loop

// let a = [1,2,3,4,5,6];
// let reversed = [];
// for (let i = a.length - 1; i >= 0; i--) {
//     reversed.push(a[i]);
// }
// console.log(reversed);

const jainam = {

    name: "Jainam",
    age: 20,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
}
// console.log(jainam);

let l = jainam
const [j,b] = jainam
k = {address};
console.log(k);

