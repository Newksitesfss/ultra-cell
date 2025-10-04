document.addEventListener("DOMContentLoaded", function () {
  // Menu Hamburger
  const menuToggle = document.createElement('div');
  menuToggle.id = 'menu-toggle';
  menuToggle.innerHTML = '&#9776;'; // ícone hamburger
  document.querySelector('.header').appendChild(menuToggle);

  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Smooth scroll
  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if(targetSection){
        window.scrollTo({
          top: targetSection.offsetTop - 60, // ajusta para cabeçalho fixo
          behavior: 'smooth'
        });
        if(navbar.classList.contains('active')){
          navbar.classList.remove('active');
        }
      }
    });
  });
});

