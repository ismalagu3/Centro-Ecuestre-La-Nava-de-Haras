const toggleButton = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');
const sections = document.querySelectorAll('main section');
const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.stopPropagation(); // Detenemos la propagación del evento para evitar que se active el clic en el botón de menú
    toggleMenu();
  });
});

toggleButton.addEventListener('click', () => { 
  toggleMenu();
});

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.classList.contains('show')) {
    // Ocultar sección con efecto fade out
    section.classList.remove('show');
    section.classList.add('hide');
    setTimeout(() => {
      section.style.display = 'none';
      section.classList.remove('hide');
    }, 300); // Esperamos 200ms (duración de la animación fade out) antes de ocultar la sección
  } else {
    // Ocultar todas las secciones antes de mostrar la seleccionada
    sections.forEach((section) => {
      if (section.classList.contains('show')) {
        section.classList.remove('show');
        section.classList.add('hide');
        setTimeout(() => {
          section.style.display = 'none';
          section.classList.remove('hide');
        }, 300); // Esperamos 300ms (duración de la animación fade out) antes de ocultar la sección
      }
    });

      setTimeout(() => {
        section.style.display = 'block';
        section.classList.add('show');
      }, 300);
    //}
  }
}

function toggleMenu() {
  menu.classList.toggle('show');
  sections.forEach((section) => {
    section.classList.toggle('hidden');
  });
  toggleButton.classList.toggle('open');
}