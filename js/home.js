const menuIcon = document.getElementById("menu-icon");
const menuMovil = document.getElementById("menu-movil");
const menuDesactived = document.getElementById("container-desactived");

menuIcon.addEventListener("click", () => {
  menuMovil.classList.remove("active");
  menuIcon.classList.add("active");
});

menuDesactived.addEventListener("click", () => {
    menuMovil.classList.add("active");
    menuIcon.classList.remove("active");
  });

