// Obtener los elementos necesarios del DOM
const colorButton = document.getElementById('color-button');
const colorCode = document.getElementById('color-code');

// Verificar los elementos recogidos del DOM
console.log(colorButton);
console.log(colorCode);

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Función para manejar el evento de clic de botón
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
}

// Agregar detector de eventos al botón
colorButton.addEventListener('click', changeBackgroundColor);
