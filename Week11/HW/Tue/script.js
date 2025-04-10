const listitem1 = document.getElementById("listitem1");
const listitem2 = document.getElementById("listitem2");
const listitem3 = document.getElementById("listitem3");
const listitem4 = document.getElementById("listitem4");
const listitem5 = document.getElementById("listitem5");
const listitem6 = document.getElementById("listitem6");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const groceries = ["Bell . Peppers", "Ground . Beef", "Salt", "Sausages", "Sliced Cheese", "Noodles"]

listitem1.textContent = groceries[0];
listitem2.textContent = groceries[1];
listitem3.textContent = groceries[2];
listitem4.textContent = groceries[3];
listitem5.textContent = groceries[4];
listitem6.textContent = groceries[5];

function checkOrUncheck(button, listitem, image) {
    if(button.textContent == "☐") {
        button.textContent = "☑";
        listitem.style.textDecoration = "line-through 2px";
        image.style.filter = "grayscale(100)";
    } else {
        button.textContent = "☐"
        listitem.style.textDecoration = "none";
        image.style.filter = "";
    }
}

const button1 = document.getElementById("item1");
const button2 = document.getElementById("item2");
const button3 = document.getElementById("item3");
const button4 = document.getElementById("item4");
const button5 = document.getElementById("item5");
const button6 = document.getElementById("item6");
button1.addEventListener("click",function() { checkOrUncheck(button1, listitem1, image1) });
button2.addEventListener("click",function() { checkOrUncheck(button2, listitem2, image2) });
button3.addEventListener("click",function() { checkOrUncheck(button3, listitem3, image3) });
button4.addEventListener("click",function() { checkOrUncheck(button4, listitem4, image4) });
button5.addEventListener("click",function() { checkOrUncheck(button5, listitem5, image5) });
button6.addEventListener("click",function() { checkOrUncheck(button6, listitem6, image6) });
