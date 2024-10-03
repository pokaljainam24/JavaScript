// console first, middle and last arr using calculation

// let arr = [1,2,3,4,5];
// let first = arr[0];
// let middle = arr[Math.floor(arr.length/2)];
// let last = arr[arr.length-1];
// console.log(first,middle,last);

// console first, middle and last arr using calculation using for loop

// let arr = [1, 2, 3, 4, 5];
// let first, middle, last;

// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) {
//     first = arr[i];
//   }

//   if (i === Math.floor(arr.length / 2)) {
//     middle = arr[i]; 
//   }

//   if (i === arr.length - 1) {
//     last = arr[i];
//   }
// }

// console.log(first, middle, last);



// using forEach

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let first, middle, last;

// arr.forEach((value, index) => {
//   if (index === 0) {
//     first = value;
//   }

//   if (index === Math.floor(arr.length / 2)) {
//     middle = value; 
//   }

//   if (index === arr.length - 1) {
//     last = value;
//   }
// });

// console.log(first, middle, last);


function removeodd(a) {
    if (a % 2 !== 0){
        return a
    }     
}

let myarr = [1,2,3,4,5]
let newarr = myarr.filter(removeodd)
console.log(newarr)                          


function adddata(c){
    if (c % 2 !== 0){
        return c + 10 * 2 / 3                      
    }
}
let myarr1 = [1,2,3,4,5]      
let newarr1 = myarr1.map(adddata)
console.log(newarr1)


CompaniesName1 = ['facebook','google','IBM','apple','jainam','jigar','isha','vinni']

const companiesWithoutLast = [CompaniesName1];
companiesWithoutLast.splice(2, 4);
console.log("splice company:", companiesWithoutLast);

const ComName = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const slicecompanies2 = ComName.pop(...ComName)
ComName.splice(2, 3);
console.log("pop:", slicecompanies2);

