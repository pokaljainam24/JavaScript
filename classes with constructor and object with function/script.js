// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const otto = new Person("Otto");
// otto.introduce();

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class ExtendedPerson extends Person {
    constructor(name, age) {
        super(name);  
        this.age = age;
    }

    introduceWithAge() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const otto = new ExtendedPerson("Otto", 30);
console.log(otto)
otto.introduce();        
otto.introduceWithAge();


// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// const mycar = new Model("Ford", "Mustang");
// console.log(mycar.show());  // Outputs: I have a Ford, it is a Mustang



// class Employee {
//     constructor(Ename, Esalary, Eid) {
//         this.Ename = Ename;
//         this.Esalary = Esalary;
//         this.Eid = Eid;
//     }
// }

// class jainam extends Employee {
//     constructor(Ename, eage) {
//         super(Ename, eage);
//         this.Ename = Ename;
//         this.eage = eage;
//     }

//     cat() {
//         console.log("I am a cat");
//     }

//     jainam() {
//         console.log("I am jainam");
//     }

// }

// const calling = new jainam("jai", '21');
// console.log(calling);


// // date function

// class Date {
//     constructor(year, month, day) {
//         this.year = year;
//         this.month = month;
//         this.day = day;
//     }
//     showDate() {
//         return this.year + '-' + this.month + '-' + this.day;
//     }
// }

// // create a new date object

// const date = new Date(2024, 2, 12);
// console.log(date.showDate());  // Outputs: 2024-3-12


// const article = {
//     title: "Learning JavaScript",
//     author: "John Doe"
// };

// article.rename = function (oldKey, newKey) {
//     this[newKey] = this[oldKey];
//     delete this[oldKey];
// };

// article.rename('title', 'headline');
// console.log(article);  // { author: 'John Doe', headline: 'Learning JavaScript' }


// article.rename('tags', 'keywords');
// console.log(article);  // { author: 'John Doe', headline: 'Learning JavaScript', keywords: undefined }


// function outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     }
// }

// console.log(typeof outer()); 

// console.log(outer());

