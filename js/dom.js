// Obtener referencias a los elementos del DOM
const altoElemento = document.getElementById('alto');
const anchoElemento = document.getElementById('ancho');
const nuevoAltoInput = document.getElementById('nuevoAlto');
const nuevoAnchoInput = document.getElementById('nuevoAncho');

const contentElement = document.getElementById('container');
//let windowWidth = window.innerWidth;//ancho de ventana
//let windowHeight = window.innerHeight;//alto de ventana 

// cambiando tamaño de ventana
function resizeWindow() {
  altoElemento.textContent = window.innerHeight;
  anchoElemento.textContent = window.innerWidth;
}

// Llamar a la función para mostrar las dimensiones actuales
resizeWindow();

// Escuchar el evento resize y llamar a la función de actualización
window.addEventListener('resize', resizeWindow);

// Agregar un event listener a los inputs para cambiar el tamaño de la ventana
nuevoAltoInput.addEventListener('input', () => {
  // Validar el valor ingresado
  const nuevoAlto = Math.max(0, parseInt(nuevoAltoInput.value));
  contentElement.style.height = nuevoAlto + 'px'; // Ajustar el alto del contenido
});

nuevoAnchoInput.addEventListener('input', () => {
  // Validar el valor ingresado
  const nuevoAncho = Math.max(0, parseInt(nuevoAnchoInput.value));
  contentElement.style.width = nuevoAncho + 'px'; // Ajustar el ancho del contenido
});
