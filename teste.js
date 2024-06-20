// script.js
const h2Element = document.getElementById('video-title');
const button = document.getElementById('change-size-btn');

button.addEventListener('click', () => {
  // Altera o tamanho do h2 para um valor diferente
  const currentFontSize = parseInt(window.getComputedStyle(h2Element).fontSize);
  const newFontSize = currentFontSize === 24 ? 20 : 24; // Exemplo: alterna entre 20px e 24px

  h2Element.style.fontSize = `${newFontSize}px`;
});
