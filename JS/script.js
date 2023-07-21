const toggleButton = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');
const sections = document.querySelectorAll('main section');
const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });
});

toggleButton.addEventListener('click', () => { 
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle('show');
  toggleButton.classList.toggle('open');
}

let as = document.querySelectorAll('ul li a');
let sectiones = document.querySelectorAll('main section');

as.forEach((a, veces) => {
  a.addEventListener('click', ()=>{
    sectiones.forEach((section)=>{
      section.classList.remove('show');
    })
    sectiones[veces].classList.add('show');
  })
});