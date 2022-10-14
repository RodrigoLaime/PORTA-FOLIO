
const menu = document.querySelector('.invicible');
const barra = document.querySelector('.barra');
const exit = document.querySelector('.exit')

barra.addEventListener('click', () => {
  menu.classList.remove('active');
  barra.classList.add('active');
})
exit.addEventListener('click', () => {
  barra.classList.remove('active');
  menu.classList.add('active');
})
