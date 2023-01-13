const menuIcon = document.getElementById("menu-icon");
const menuMovil = document.getElementById("menu-movil");
const main = document.getElementById("main");

menuIcon.addEventListener("click", () => {
  menuMovil.classList.remove("active");
  menuIcon.classList.add("active");
});

main.addEventListener("click", () => {
    menuMovil.classList.add("active");
  menuIcon.classList.remove("active");
});
