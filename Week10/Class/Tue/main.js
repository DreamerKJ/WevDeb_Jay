var x = 5;
var y = 3.141592;
var hi = "hi";
const helloIAmACamelCaseVariable = "camelCaseFTW";

document.getElementById("output").innerHTML = "REPLACED!"

document.getElementById("alertButton").onclick = function() {
    window.alert(5+6);
    console.log("Calculating... Beep Boop.");
}

document.getElementById("demo").innerHTML = "The value of x is " + x + ".";

{
    var a = 10;
}
document.getElementById("demo1").innerHTML = "The value of a is " + a + ".";

// let a = 10; << doesn't work
a = 10;
document.getElementById("demo2").innerHTML = "The value of a is " + a + ".";
{
    let a = "5" + 2;
    document.getElementById("demo3").innerHTML = "The weird value of a is " + a + ".";
}
document.getElementById("demo4").innerHTML = "The value of a is " + a + ".";

let carName = "Volvo";
document.getElementById("car").innerHTML = carName + " is a car";

let lhs = 1283, rhs = 4782;
document.getElementById("math").innerHTML = lhs + " * " + rhs + " is " + lhs*rhs + ".";

let nah = false;

document.getElementById("nah").innerHTML = nah;

// IN CLASS PRACTICE

const name = "Jay";
var age = 24;
var canICodeJavascript = true; // dubious

document.getElementById("agedown").onclick = function() {
    age = age - 1;
    document.getElementById("intro").innerHTML = "Hello, my name is " + name + ", I am " + age + 
        " years old and I can code Javascript: " + canICodeJavascript + ".";
};

document.getElementById("ageup").onclick = function() {
    age = age + 1;
    document.getElementById("intro").innerHTML = "Hello, my name is " + name + ", I am " + age + 
        " years old and I can code Javascript: " + canICodeJavascript + ".";
};

document.getElementById("intro").innerHTML = "Hello, my name is " + name + ", I am " + age + 
    " years old and I can code Javascript: " + canICodeJavascript + ".";


