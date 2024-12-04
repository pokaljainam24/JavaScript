function appendToDOM(message) {
    const output = document.getElementById("output");
    const para = document.createElement("p");
    para.textContent = message;
    output.appendChild(para);
}

// 1) School class
class School {
    student(name, email, contact) {
        const message = `Student Details: Name: ${name}, Email: ${email}, Contact: ${contact}`;
        appendToDOM(message);
    }

    faculty(name, email, contact) {
        const message = `Faculty Details: Name: ${name}, Email: ${email}, Contact: ${contact}`;
        appendToDOM(message);
    }

    peon(name, email, contact) {
        const message = `Peon Details: Name: ${name}, Email: ${email}, Contact: ${contact}`;
        appendToDOM(message);
    }
}

const school = new School();
school.student("Jainam Pokal", "Jainampokal@example.com", "9016883804");
school.faculty("Keyur Gohil", "KeyurGohil@example.com", "9987654321");
school.peon("James", "james@example.com", "1122334455");

// 2) Person class
class Person {
    father(name, age = 60) {
        const message = `Father's Age Is: ${age}`;
        appendToDOM(message);
    }

    child(name, age = 20) {
        const message = `Child's Age Is: ${age}`;
        appendToDOM(message);
    }
}

const person = new Person();
person.father("Father", 60);
person.child("Child", 20);

// 3) Employee class
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    print() {
        const message = `My Name is ${this.name}, My Age is ${this.age}, & My Monthly Salary is ${this.salary}`;
        appendToDOM(message);
    }
}

const emp = new Employee("Jainam Pokal", 22, 50000);
emp.print();

// 4) Shape class
class Shape {
    rectangle(width, height) {
        const area = width * height;
        appendToDOM(`Rectangle Area: ${area}`);
    }

    circle(radius) {
        const area = 3.14 * radius * radius;
        appendToDOM(`Circle Area: ${area}`);
    }
}

const shape = new Shape();
shape.rectangle(5, 10);
shape.circle(7);

// 5) Mobile class
class Mobile {
    constructor(modelNo = "DefaultModel") {
        this.modelNo = modelNo;
        this.color = "Not Set";
    }
}

Mobile.prototype.setColor = function (color) {
    this.color = color;
    appendToDOM(`Model: ${this.modelNo}, Color: ${this.color}`);
};

const myMobile = new Mobile("GalaxyS23");
appendToDOM(`Model: ${myMobile.modelNo}, Color: ${myMobile.color}`);
myMobile.setColor("Black");

// 6) Employee1 with prototype
class Employee1 {
    constructor(name, email, salary) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
}

Employee1.prototype.setdesignation = function (designation) {
    this.designation = designation;
    appendToDOM(
        `Name: ${this.name}, Email: ${this.email}, Salary: ${this.salary}, Designation: ${this.designation}`
    );
};

const emp1 = new Employee1("Jainam", "jainampokal@gmail.com", 50000);
emp1.setdesignation("Full-Stack Developer");

// 7) Array prototype to convert game names to uppercase
Array.prototype.convertToUppercase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
    appendToDOM(`Games in Uppercase: ${this.join(", ")}`);
};

const games = ["soccer", "basketball", "cricket", "tennis"];
appendToDOM(`Before Conversion: ${games.join(", ")}`);
games.convertToUppercase();





