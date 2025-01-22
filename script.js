function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleSunglasses(){
    const glasses = document.querySelector(".sunglasses");
    glasses.classList.toggle("sunglasses-on")
}