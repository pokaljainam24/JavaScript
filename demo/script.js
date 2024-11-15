// // console first, middle and last arr using calculation

// let arr = [1,2,3,4,5];
// let first = arr[0];
// let middle = arr[Math.floor(arr.length/2)];
// let last = arr[arr.length-1];
// console.log(first,middle,last);

// // console first, middle and last arr using calculation using for loop

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

let arr5 = [1, 2, 3, 4, 5, 6, 7];
let first1, middle1, last1;

arr5.forEach((value, index) => {
  if (index === 0) {
    first1 = value;
  }

  if (index === Math.floor(arr5.length / 2)) {
    middle1 = value; 
  }

  if (index === arr5.length - 1) {
    last1 = value;
  }
});



console.log(first1, middle1, last1);


// function removeodd(a) {
//     if (a % 2 !== 0){
//         return a
//     }     
// }

// let myarr = [1,2,3,4,5]
// let newarr = myarr.filter(removeodd)
// console.log(newarr)                          


// function adddata(c){
//     if (c % 2 !== 0){
//         return c + 10 * 2 / 3                      
//     }
// }

// let myarr1 = [1,2,3,4,5]      
// let newarr1 = myarr1.map(adddata)
// console.log(newarr1)


// CompaniesName1 = ['facebook','google','IBM','apple','jainam','jigar','isha','vinni']

// const companiesWithoutLast = [CompaniesName1];
// companiesWithoutLast.splice(2, 4);
// console.log("splice company:", companiesWithoutLast);

// const ComName = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// const slicecompanies2 = ComName.pop(...ComName)
// ComName.splice(2, 3);
// console.log("pop:", slicecompanies2);

// const CompaniesName1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"];
// const filter = CompaniesName1.filter((company) => company.includes("o","o"));
// console.log(filter);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey',"vraj"]; //-1 arr declare

// const allergicToHoney = true; // -2 set variable as a boolean 

// if (allergicToHoney && shoppingCart.includes('Honey')) { //3- check boolean & check if array contains honey
//     const index = shoppingCart.indexOf('Honey'); //-4 set index
//     shoppingCart.splice(index, 1); //
// }
// console.log(shoppingCart); 

// function abc(n){
//   return n.length === 4
// }
   
// let myvar = shoppingCart.filter(abc)
// console.log(myvar)


// output nan 


// let str = "abc"
// let str1 = str.split("")
// console.log(str1)
// str1[0] = "n"
// console.log(str1)
// let str2 = str1.join("")
// console.log(typeof str2)


var mark = [10,15,19,20,21];
