const output = document.querySelector('.output');
output.textContent = "";

let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);

for( ; i>=0 ; i--) {
    const para = document.createElement('p');
    if(i == 0) {
        para.textContent = "Blast Off!"
    } else if (i == 10) {
        para.textContent = "Countdown " + i;
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
}