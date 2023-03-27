let ingresoIcono = document.querySelector('#ingreso-icono');
let menuIngreso = document.querySelector('.menu-ingreso');
let opcionesIcono = document.querySelector('#opciones-icono');
let menuOpciones = document.querySelector('.menu-opciones');

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    menuIngreso.style.display = 'flex';
  } else {
    menuIngreso.style.display = 'none';
  }
  if (window.innerWidth > 500) {
    menuOpciones.style.display = 'flex';
  } else {
    menuOpciones.style.display = 'none';
  }
});

ingresoIcono.addEventListener('click', () => {
  let verificacionIngreso = menuIngreso.style.display;
  if (verificacionIngreso == 'none') {
    menuIngreso.style.display = 'block';
  } else {
    menuIngreso.style.display = 'none';
  }
  console.log('ver que paso');
  console.log(menuIngreso);
});

opcionesIcono.addEventListener('click', () => {
  let verificacionOpciones = menuOpciones.style.display;
  if (verificacionOpciones == 'none') {
    menuOpciones.style.display = 'block';
  } else {
    menuOpciones.style.display = 'none';
  }
});
