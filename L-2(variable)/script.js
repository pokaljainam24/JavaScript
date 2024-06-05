
function info() {
    let name = "jainam";
    let age = 22;
    console.log(name, age);
}

if (true) {
    var name = "kritu";
    var age = 24;
}
console.log(name,age);
info();





// Global Scope

var globalVal = 10;

function num() {
    console.log(globalVal);
}

num(); // 10 (output)





// Var(Function Scope)

function test() {
    var name = "jainam";
    var age = 22;
    console.log(name, age);
}
if (true) {
    let name = "Kritu._.";
    console.log(name);
}
test(); // Kritu._. & jainam 22 (output)




// Let & Const(Block Scope)

function both() {
    {
      let a = 10;
      const b = 5;
      console.log(a,b);
    }
}
both(); // 10 & 5 (output)





