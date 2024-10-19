class Employee{
    constructor(Ename, Esalary, Eid){
        this.Ename = Ename;
        this.Esalary = Esalary;
        this.Eid = Eid;
    }
}

class jainam extends Employee{
    constructor(Ename, eage){
        super(Ename,eage);
        this.Ename = Ename;
        this.eage = eage;
    }

    #cat(){
        console.log("I am a cat");
    }

}

const calling = new jainam ("jai",'21');
console.log(calling);

