async function loadFox() {
    const res = await fetch("https://randomfox.ca/floof/");
    const fox = await res.json();
    
    console.log(fox.image);
    document.getElementById("fox").src = fox.image;
    document.body.style.backgroundImage = "url(" + fox.image + ")";
}

const more = document.getElementById("floof");
more.addEventListener("click", loadFox);

loadFox();
