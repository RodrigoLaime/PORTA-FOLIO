const menu = document.getElementById('menu');
const exit = document.getElementById('exit');
const menuFlotante = document.getElementById('menu-flotante');

menu.addEventListener('click', () => {
  menu.classList.add('inactive');
  exit.classList.remove('inactive');
  menuFlotante.classList.remove('inactive');
});
exit.addEventListener('click', () => {
  menu.classList.remove('inactive');
  exit.classList.add('inactive');
  menuFlotante.classList.add('inactive');
});