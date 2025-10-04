<script>
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
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
          });
          if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
          }
        }
      });
    });
  });

  // ✅ Função WhatsApp GLOBAL
  function enviarParaWhatsApp() {
    var modelo = document.getElementById("modeloInput").value.trim();

    if (modelo === "") {
      alert("Por favor, digite o nome do modelo.");
      return;
    }

    var numero = "5581995100345"; // número com DDI e DDD
    var mensagem = encodeURIComponent("Olá! Gostaria de consultar o modelo: " + modelo);
    var url = "https://wa.me/" + numero + "?text=" + mensagem;

    window.open(url, "_blank");
  }
</script>

