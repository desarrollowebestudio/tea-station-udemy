// Elementos
const botonBarraNavegacion = document.getElementById('botonBarraNavegacion');
const barraNavegacion = document.getElementById('barraNavegacion');
const iconoCerrarBarra = document.getElementById('iconoCerrarBarra');

// Mostrar Barra de Navegación
botonBarraNavegacion.addEventListener('click', () => {
  barraNavegacion.classList.add('mostrarBarra');
  botonBarraNavegacion.classList.add('ocultar');
});

// Ocultar Barra de Navegación
iconoCerrarBarra.addEventListener('click', () => {
  barraNavegacion.classList.remove('mostrarBarra');
  botonBarraNavegacion.classList.remove('ocultar');
});