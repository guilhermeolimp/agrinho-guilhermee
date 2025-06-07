// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  });

  // Exemplo de alerta para funções futuras
  const comingSoon = document.querySelectorAll('.em-breve');
  comingSoon.forEach(el => {
    el.addEventListener('click', () => {
      alert('Este recurso estará disponível em breve!');
    });
  });
});
