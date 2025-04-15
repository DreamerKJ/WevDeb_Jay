const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

for(const name of people) {
    if(name == 'Phil' || name == 'Lola') {
        refused.textContent += name + ", ";
    } else {
        admitted.textContent += name + ", ";
    }
}

admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2)
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2)

admitted.textContent += ".";
refused.textContent += ".";