// Programación Orientada a Objetos
// Alumno: Diego Alejandro Gentner Polanco
// 2do Semestre Grupo "H"

import InterLineal from './interpolacion-lineal.js'
import InterCuadratica from './interpolacion-cuadratica.js'
import InterLagrange from './interpolacion-lagrange.js'
import NewtonRaphson from './newton-raphson.js';


class App {


  // Funcionalidad de Botones, aqui se decide que se ejecuta tras la pulsacion de cada boton
  constructor() {
        
    let btnRegLineal = document.querySelector('#btnLineal');
    let btnRegCuadratica = document.querySelector('#btnCuadratica');
    let btnRegLagUno = document.querySelector('#btnLagUno');
    let btnRegLagDos = document.querySelector('#btnLagDos');
    let btnRegNewton = document.querySelector('#btnNewton');
    let btnRegErrorVR = document.querySelector('#btnErrorVR');
    let btnRegFormulas = document.querySelector('#btnFormulas');

    btnRegLineal.addEventListener('click', this._interLineal);
    btnRegCuadratica.addEventListener('click', this._interCuadratica);
    btnRegLagUno.addEventListener('click', this._interLangUno);
    btnRegLagDos.addEventListener('click', this._interLangDos);
    btnRegNewton.addEventListener('click', this.newton);
    btnRegErrorVR.addEventListener('click', this.valorRelativo);
    btnRegFormulas.addEventListener('click', this.redirect);

  }

  // Funciones de App Class

  async _interLineal() {
    
    let x = getUserDataAndComprobar('x', false)
    let x0 = getUserDataAndComprobar('x0', true)
    let x1 = getUserDataAndComprobar('x1', true)
    let fx0 = getUserDataAndComprobar('fx0', true)
    let fx1 = getUserDataAndComprobar('fx1', true)
    
    let resultado = new InterLineal(x,x0,x1,fx0,fx1);
    
        console.log(`Valores Interlineales: ${resultado.getValues()}`)
        anunciarResultado(resultado.getAnswer());
        return resultado.getAnswer();
  }


  async _interCuadratica() {
    let x = getUserDataAndComprobar('x', false)
    let x0 = getUserDataAndComprobar('x0', true)
    let x1 = getUserDataAndComprobar('x1', true)
    let x2 = getUserDataAndComprobar('x2', true)
    let fx0 = getUserDataAndComprobar('fx0', true)
    let fx1 = getUserDataAndComprobar('fx1', true)
    let fx2 = getUserDataAndComprobar('fx2', true)
    
    let resultado = new InterCuadratica(x,x0,x1,x2,fx0,fx1,fx2);
    
        console.log(`Valores Interpolacion Cuadraticos: ${resultado.getValues()}`)
        anunciarResultado(resultado.getAnswer());
        return resultado.getAnswer();
  }


  async _interLangUno() {
    
    let x = getUserDataAndComprobar('x', false)
    let x0 = getUserDataAndComprobar('x0', true)
    let x1 = getUserDataAndComprobar('x1', true)
    let fx0 = getUserDataAndComprobar('fx0', true)
    let fx1 = getUserDataAndComprobar('fx1', true)
    
    let resultado = new InterLagrange(x,x0,x1,fx0,fx1);
    
        console.log(`Valores Interpolacion Lang1G: ${resultado.getValues()}`)
        anunciarResultado(resultado.getAnswerUno());
        return resultado.getAnswerUno();
  }


  async _interLangDos() {
    let x = getUserDataAndComprobar('x', false)
    let x0 = getUserDataAndComprobar('x0', true)
    let x1 = getUserDataAndComprobar('x1', true)
    let x2 = getUserDataAndComprobar('x2', true)
    let fx0 = getUserDataAndComprobar('fx0', true)
    let fx1 = getUserDataAndComprobar('fx1', true)
    let fx2 = getUserDataAndComprobar('fx2', true)
    
    let resultado = new InterLagrange(x,x0,x1,fx0,fx1,x2,fx2);
    
        console.log(`Valores Interpolacion Lang2G: ${resultado.getValues()}`)
        anunciarResultado(resultado.getAnswerDos());
        return resultado.getAnswerDos();
  }


  async valorRelativo() {

    let valorReal = (prompt('Introduce el VALOR REAL'));
    valorReal = comprobar(valorReal);

    let valorAprox = (prompt('Introduce el VALOR APROXIMADO'));
    valorAprox = comprobar(valorAprox);

    let errorVerdadero = valorReal - valorAprox;
    let errorRelativo = (errorVerdadero / valorReal) * 100;

    if ((Number.isNaN(errorRelativo)) === true) {
        errorRelativo = 0;
    }

    anunciarResultado(`
    Error Verdadero: ${errorVerdadero} \t\n 
    Error Relativo: ${Math.abs(errorRelativo.toFixed(5))}%`);

  }


  async newton() {

    await Swal.fire('', 'Solo puedes usar un maximo de 100 iteraciones');
    await Swal.fire('', 'Esta función utiliza la ecuación: 2cos(x)-e^x y usa solo 5 decimales!');
      
    let x0 = getUserDataAndComprobar('x0', true)
    let iteraciones = Math.abs((prompt('¿Cuántas Iteraciones?')));
    iteraciones = comprobar(iteraciones);
    if (iteraciones > 100) {
      noDisponible('Demasiadas Iteraciones - MAX 100')
    } 
    
    x0 = new NewtonRaphson(x0, iteraciones);
    comprobar(x0.getAnswer())
  
    anunciarResultado(`El resultado es:${x0.getAnswer()} con ${valorRelativoReutilizable(0.53978, x0.getAnswer())}`)
    return x0
  }

  async redirect() {
    anunciarPopUp('Redirigiendo...', 'Pulsa OK', 'info', 3000, window.location.href='src/formulas.html')
  }


} // App Class Finale


new App() // App Execution



/* Reutilizables 2.0 - - - - - -

    getUserDataAndComprobar = 
      ##################################### ##################################### #############
      #   Funcion que analiza los datos para posteriormente regresar los valores comporbados  #
      #   La funcion comprueba que sean numeros                                               #
      #   La funcion comprueba que los campos no estan vacios                                 #
      #   La funcion comprueba si se cancelo la operacion cuando se regresa un null           #
      ##################################### ##################################### ############# */

const getUserDataAndComprobar = (data, know) => {
  
  let readData;

  if (know) {
    readData = (prompt(`Introduce ${data} -> (Valor ya conocido)`));
  } else {
    readData = (prompt(`Introduce ${data} -> (Valor a Calcular)`));
  }
  return comprobar(readData);;

}

const comprobar = (value) => {
  if (Number.isNaN(Number(value)) == true || value === undefined || value == '' || value == null) {
      if (value == null) {
        Toast.fire({
          icon: 'warning',
          title: 'CANCELADO'
        }).then(javascript_abort());
      } else {
        anunciarPopUp('UPPS!!!', 'Datos no válidos o incorrectos.', 'warning');
      }
  } else {
      let val = Number(value);
      console.log(val);
      return val;
  }
}

// Es necesaria para ciertas funciones
function valorRelativoReutilizable(valorReal, valorAprox) {

  let errorVerdadero = valorReal - valorAprox;
  let errorRelativo = (errorVerdadero / valorReal) * 100;

  if ((Number.isNaN(errorRelativo)) === true) {
      errorRelativo = 0;
  }

  return (`Error Verdadero: ${errorVerdadero} \t\n Error Relativo: ${Math.abs(errorRelativo.toFixed(5))}%`);

}

// Indica no disponibilidad
function noDisponible(value) {
  anunciarPopUp('NO DISPONIBLE', value, 'error');
}

// Aborta toda ejecucion
function javascript_abort()
{
 throw new Error('THIS IS NOT AN ERROR - JAVASCRIPT ABORT');
}

// Esta Funcion es importante
function anunciarResultado(value) {
console.log('Resultado = ' + value);
if (Number.isNaN(value) == true) {
    anunciarPopUp('El resultado es indefinido.', '', 'info');
} else {
    anunciarPopUp('El resultado es:', '' + value, 'success');
}
}


// Sweet Alert Commands

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

async function anunciarPopUp(messageAlert ,errorMessage, typeMessage, tiempo, otro) {
  let timerInterval
  Swal.fire({
    title: 'VALIDANDO...',
    html: 'ESPERE UN MOMENTO',
    timer: tiempo = 500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    willClose: () => {
      Swal.fire(messageAlert, errorMessage, typeMessage);
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      otro;
    }
  })
  return javascript_abort();
}