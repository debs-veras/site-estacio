// Seleciona todos os botões do acordeão
const accordionButtons = document.querySelectorAll('.accordion-button');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    accordionContents.forEach(content => {
      content.classList.remove('active');
    });
    target.classList.add('active');
  });
});
