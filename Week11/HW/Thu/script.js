/*const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    // The For Loop is iterating through i from 0 to 99, repeating through it. 
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
} */

btn.addEventListener("click", draw);

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

/* You can also iterate through collections(arrays) with for loops*/
for (const cat of cats) {
  console.log(cat);
}

function toUpper(string) {
    return string.toUpperCase();
}

/* The .map function also iterates through a collection, 
    calling a given function on each element */

const upperCats = cats.map(toUpper);

console.log(upperCats);

function lCat(cat) {
    return cat.startsWith("L");
}

/* The filter function iterates through a collection, 
    and keeps only the elements that the given function returns true to */
// So it should be a boolean function!

const filtered = cats.filter(lCat);

console.log(filtered);

// We can also use regular for iterators to go through a collection.
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let i = 0; i < cats.length; i++) {
    if(i == 1) { break; } // And we can also break from a loop!
                          // This would exit the loop early.
    console.log(cats[i]);
}

for (let i = 0; i < cats.length; i++) {
    if(i == 1) { continue; } // Continue, on the other hand, 
                          // immediately goes to the next loop.
                          // So, this would skip only 1!
    console.log(cats[i]);
}

/* Then, there's while.
    While loops as long as the condition is satisfied. 
    The following is a way to iterate through a collection,
    though this is generally not too great  */

let myFavoriteCats = "My cats are called ";
let i = 0
while (i < cats.length) {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
}
console.log(myFavoriteCats);

myFavoriteCats = "My cats are called ";
i = 0;

/* There's also do-while, in which the first loop runs no matter what */
do {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
} while (i < cats.length);
  
  console.log(myFavoriteCats); 