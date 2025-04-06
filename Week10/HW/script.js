function doTask1() {
    window.alert("Hello World!");
    console.log("My first JavaScript assignment");
    task1output.textContent = "I just modified this element with JavaScript";   
}

const task1button = document.getElementById("task1button");
const task1output = document.getElementById("output");
task1button.addEventListener("click", doTask1);

const name = "Jay";
var age = 24;
var favoriteNumber = 6.7;

function doTask2() {
    console.log("My name is " + name + ", I am " + age + " years old, and my favorite number is " + favoriteNumber + ".");
}

const task2button = document.getElementById("task2button");
task2button.addEventListener("click", doTask2);

function calculate(a, b) {
    console.log("For numbers " + a + " and " + b + ", the sum is " + (a+b) + ", the difference is " + (a-b) + ", the product is " + (a*b) + ", and the ratio is " + (a/b) + ".");
}

const task31button = document.getElementById("task31button");
const task32button = document.getElementById("task32button");
const task33button = document.getElementById("task33button");
task31button.addEventListener("click", function() { calculate(2,1) });
task32button.addEventListener("click", function() { calculate(10,8) });
task33button.addEventListener("click", function() { calculate(45,29) });

function fahrenheitToCelsius(a) {
    window.alert(a + " degrees Fahrenheit is " + ((a-32)*5/9) + " degrees Celsius.");
}

function celsiusToFahrenheit(a) {
    window.alert(a + " degrees Celsius is " + ((a/5*9)+32) + " degrees Fahrenheit.");
}
const task41button = document.getElementById("task41button");
const task42button = document.getElementById("task42button");
task41button.addEventListener("click", function() { fahrenheitToCelsius(32) });
task42button.addEventListener("click", function() { celsiusToFahrenheit(0) });

function doTask5(a) {
    window.alert(a.toUpperCase() + " has " + a.length + " characters.");
}
const task5button = document.getElementById("task5button");
task5button.addEventListener("click", function() { doTask5("Hello" )});

var isLightOn = false;

function doTask6() {
    if(isLightOn) {
        isLightOn = false;
        task6text.textContent = "LIGHT IS OFF";
    } else {
        isLightOn = true;
        task6text.textContent = "LIGHT IS ON";
    }
}

const task6button = document.getElementById("task6button");
const task6text = document.getElementById("task6text");
task6button.addEventListener("click", doTask6);

let countByTwoResult = "";

function countByTwo(a) {
    countByTwoResult = "";
    for(let i = 0 ; i <= a ; i+=2 ) {
        countByTwoResult += (i + " ");
    }
    task7text.textContent = countByTwoResult;
}

const task7button = document.getElementById("task7button");
const task7text = document.getElementById("task7text");
task7button.addEventListener("click", function() { countByTwo(20) });