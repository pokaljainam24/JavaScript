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

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// class ExtendedPerson extends Person {
//     constructor(name, age) {
//         super(name);  
//         this.age = age;
//     }

//     introduceWithAge() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const otto = new ExtendedPerson("Otto", 30);
// otto.introduce();        
// otto.introduceWithAge();


class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

mycar = new Model("Ford", "Mustang");
console.log(mycar.show());  // Outputs: I have a Ford, it is a Mustang



class Employee {
    constructor(Ename, Esalary, Eid) {
        this.Ename = Ename;
        this.Esalary = Esalary;
        this.Eid = Eid;
    }
}

class jainam extends Employee {
    constructor(Ename, eage) {
        super(Ename, eage);
        this.Ename = Ename;
        this.eage = eage;
    }

    #cat() {
        console.log("I am a cat");
    }

}

const calling = new jainam("jai", '21');
console.log(calling);