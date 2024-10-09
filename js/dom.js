
document.getElementById("ancho").innerHTML;
document.getElementById("alto").innerHTML;

const contentElement = document.getElementById('content');
const windowWidth = window.innerWidth;//ancho de ventana
const windowHeight = window.innerHeight;//alto de ventana 

// cambiando tamaño de ventana
function resizeWindow() {
  const contentWidth = contentElement.offsetWidth;
  const contentHeight = contentElement.offsetHeight;
  window.resizeTo(Math.max(contentWidth, windowWidth), Math.max(contentHeight, windowHeight));
}

contentElement.addEventListener('DOMSubtreeModified', resizeWindow);

