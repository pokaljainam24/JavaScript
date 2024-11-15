// class Employee{
//     constructor(Ename, Esalary, Eid){
//         this.Ename = Ename;
//         this.Esalary = Esalary;
//         this.Eid = Eid;
//     }
// }

// class jainam extends Employee{
//     constructor(Ename, eage){
//         super(Ename,eage);
//         this.Ename = Ename;
//         this.eage = eage;
//     }

//     #cat(){
//         console.log("I am a cat");
//     }
// }

// const calling = new jainam ("jai",'21');
// console.log(calling);

// function validation(){
//     return true;
// };

// if(validation()){
//     console.log("Validation is true");
// }else{
//     console.log("Validation is false");
// };

// console.log(validation());


// *********************************************************************************************** //
                                    // destructuring array //
// *********************************************************************************************** //

const arr = ["jainam","pokal","romil"];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const[x,y,z] = arr;
console.log(y,x);


// *********************************************************************************************** //

const {language:bhasa, title} = firstbook
console.log(title, bhasa);

const monthNames = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10:'November',
  11:'December',
  getMonthName: function(monthNumber) {
    return monthNames[monthNumber] || 'unknown';
  }
}

// // function getMonthName(monthNumber){
// //   console.log('hello world');
// //   return monthNames[monthNumber] || 'unknown';
// // }

// // console.log(getMonthName(30));
// let result = monthNames.getMonthName(3);
// console.log(result);

// let a = 'jainam';
// console.log(a.toUpperCase());

// shorting array

// let arr = [1,2,3,4,5,6,7,8];
// let sortedArr = arr.sort((a,b) => a-b);
// console.log(sortedArr);
