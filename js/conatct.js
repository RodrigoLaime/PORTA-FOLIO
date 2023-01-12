const menuIcon = document.getElementById("menu-icon");
const menuMovil = document.getElementById("menu-movil");
const containerCentro = document.getElementById("container-centro");

menuIcon.addEventListener("click", () => {
  menuMovil.classList.remove("active");
  menuIcon.classList.add("active");
});

containerCentro.addEventListener("click", () => {
    menuMovil.classList.add("active");
  menuIcon.classList.remove("active");
});
