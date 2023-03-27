let opcion = document.querySelector('#menu1');
let opcion2 = document.querySelector('#menu2');
let lineas = document.querySelectorAll('.lineas1');
let lineas2 = document.querySelectorAll('.lineas2');

const verificacion = () => {
  if (opcion.checked) {
    lineas.forEach((elemento, index) => {
      console.log(index);
      if (index == 0) {
        elemento.classList.add('linea1');
      }
      if (index == 1) {
        elemento.classList.add('linea2');
      }
      if (index == 2) {
        elemento.classList.add('linea3');
      }
    });
    console.log('verdadero');
  } else {
    lineas.forEach((elemento, index) => {
      if (index == 0) {
        elemento.classList.remove('linea1');
      }
      if (index == 1) {
        elemento.classList.remove('linea2');
      }
      if (index == 2) {
        elemento.classList.remove('linea3');
      }
    });
    console.log('falso');
  }
};

opcion.addEventListener('click', verificacion);
opcion2.addEventListener('click', verificacion)

