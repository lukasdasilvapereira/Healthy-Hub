const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-fechar");
const menuSection = document.querySelector(".menu-content");
const items = document.querySelectorAll(".menu-items");

function abrir() {
    menuClose.style.display = "block";
    menuSection.style.display = "block";
    menuSection.style.opacity = "1"
    menuSection.style.visibility = "visible"
    document.body.classList.toggle("show-mobile-menu")

    menuOpen.style.display = "none";

}

function fechar() {
    menuClose.style.display = "none";
    menuSection.style.display = "none";
    menuSection.style.opacity = "0"
    menuSection.style.visibility = "hidden"
    document.body.classList.remove("show-mobile-menu");

    menuOpen.style.display = "flex";
}
