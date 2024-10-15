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
console.log(altoElemento)
// Llamar a la función para mostrar las dimensiones actuales
resizeWindow();

// Escuchar el evento resize y llamar a la función de actualización
window.addEventListener('resize', resizeWindow);

// Agregar un event listener a los inputs para cambiar el tamaño de la ventana
nuevoAltoInput.addEventListener('input', () => {
   // Validar el valor ingresado
  const nuevoAlto = Math.max(0, parseInt(nuevoAltoInput.value));
  contentElement.style.height = nuevoAlto + 'px'; // Ajustar el alto del contenido

  //cambiar fondo div principal Por ejemplo, más de 800x600 verde, entre 800x600 y 400x220 azul y menor de 400x220 amarillo. 

  if (altoElemento.textContent>=800 || anchoElemento.textContent >=600) {
    contentElement.style.backgroundColor = 'green';

  } if (altoElemento.textContent<400 || anchoElemento.textContent <220) 
  {
    contentElement.style.backgroundColor = 'yellow';

  } else {
    contentElement.style.backgroundColor = 'blue';
  }

  let regExp = /\w/g;

  if (nuevoAlto === regExp) {
    alert('No has ingreado números, solo se permiten números');
  }
  // let regExp9 = /\w/g;  //caracteres alfabéticos
  //  let regExp10 = /\d/g  //caracteres numéricos
});

nuevoAnchoInput.addEventListener('input', () => {
  // Validar el valor ingresado
  const nuevoAncho = Math.max(0, parseInt(nuevoAnchoInput.value));
  contentElement.style.width = nuevoAncho + 'px'; // Ajustar el ancho del contenido
  let regExp  = /\w/g;

  if (nuevoAlto === regExp) {
    alert('No has ingreado números, solo se permiten números');
  }
});



