const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-fechar");
const menuSection = document.querySelector(".menu-content");
const items = document.querySelectorAll(".menu-items");

function abrir() {
    menuClose.style.display = "block";
    menuSection.style.display = "block";
    items.style.display = "flex"
}

function fechar() {
    menuClose.style.display = "none";
    menuSection.style.display = "none";
    items.style.display = "none"
}