// // # 📔 Day 7

// // ## Functions

// // A function is a reusable block of code or programing statements designed to perform a certain TextTrackList.

// // There are 4 types of functions how to created

// // 1. Declaration function
// // 2. Expression function
// // 3. Anonymous function
// // 4. Arrow function


// // ### Function Declaration ### // 

// function square() {
//     console.log(5 * 5);
// }
// square(); // 25

// function square1() {
//     let num = 8;
//     let sq = num * num;
//     console.log(sq);
// }
// square1(); // 64
 
// function printName() {
//     let firstname = 'Jainam';
//     let lastname = 'Pokal';
//     console.log(firstname + ' ' + lastname);
// }
// printName();


// // ### Function returning value

// function printFullname() {
//     let firstname = 'Jainam';
//     let lastname = 'pokal';
//     return firstname + ' ' + lastname;
// }

// console.log(printFullname());

// function addnumber() {
//     let num1 = 5;
//     let num3 = 6;
//     return num1 + num3;
// }
// console.log(addnumber());

// // ### Function with a parameter

// function areaofcircle(r) {
//     let pi = 3.14;
//     return pi * r * r;
// }
// console.log(areaofcircle(5));


// // ### Function with many parameters

// function areaofrectangle(length, breadth) {
//     return length * breadth;
// }
// console.log(areaofrectangle(5, 6));

// function Arrayvalues(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//         }
//         return sum;
// }
// const number = [1, 2, 3, 4, 4, 5, 6, 7];
// console.log(Arrayvalues(number));
// console.log(Arrayvalues([1,2,3,4,5,6,7]));

function test () {
    let a = 5;

    function inner (){
        return a;
    }
    return inner();
} 
console.log(test());

// test();
// console.log(test());

