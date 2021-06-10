// Programación Orientada a Objetos
// Alumno: Diego Alejandro Gentner Polanco
// 2do Semestre Grupo "H"

import InterLineal from './interpolacion-lineal.js'


class App {

  constructor() {
        
    let btnRegLineal = document.querySelector('#btnLineal');
    let btnRegCuadratica = document.querySelector('#btnCuadratica');
    let btnRegLagUno = document.querySelector('#btnLagUno');
    let btnRegLagDos = document.querySelector('#btnLagDos');

    btnRegLineal.addEventListener('click', this._interLineal);

  }

  _interLineal = () => {
    
    let x = getUserDataAndComprobar('x', true)
    let x0 = getUserDataAndComprobar('x0', true)
    let x1 = getUserDataAndComprobar('x1', true)
    let fx0 = getUserDataAndComprobar('fx0', true)
    let fx1 = getUserDataAndComprobar('fx1', true)
    
    let resultado = new InterLineal(x,x0,x1,fx0,fx1);
    
        console.log(`Valores Interlineales: ${resultado.getValues()}`)
        anunciarResultado(resultado.getAnswer());
        return resultado.getAnswer();
}


} // App Class Finale


new App()







// Reutilizable 2.0

const getUserDataAndComprobar = (data, know) => {
  
  let readData;

  if (know) {
    readData = (prompt(`Introduce ${data} -> (Valor ya conocido)`));
  } else {
    readData = (prompt(`Introduce ${data} -> (Valor a Calcular)`));
  }
  return comprobar(readData);;

} // Get User Dara Finale










































const interLineal = () => {
    let x = (prompt('Introduce X0 -> (Valor ya conocido)'));
    x =  comprobar(x);

    let x0 = (prompt('Introduce X0 -> (Valor ya conocido)'));
    x0 = comprobar(x0);

    let x1 = (prompt('Introduce X1 -> (Valor ya conocido)'));
    x1 = comprobar(x1);

    let fx0 = (prompt('Introduce FX0 -> (Valor ya conocido)'));
    fx0 = comprobar(fx0);

    let fx1= (prompt('Introduce FX1 -> (Valor ya conocido)'));
    fx1 = comprobar(fx1);

    
    let resultado = (((fx0)+(((fx1)-(fx0))/((x1)-(x0)))*((x)-(x0))));
    
        anunciarResultado(resultado);
        return resultado;
}



function interCuadratica() {
    let x = (prompt('Introduce X -> (Valor a Calcular)'));
    x = comprobar(x);

    let x0 = (prompt('Introduce X0 -> (Valor ya conocido)'));
    x0 = comprobar(x0);

    let x1 = (prompt('Introduce X1 -> (Valor ya conocido)'));
    x1 = comprobar(x1);

    let x2 = (prompt('Introduce X2 -> (Valor ya conocido)'));
    x2 = comprobar(x2);

    let fx0 = (prompt('Introduce FX0 -> (Valor ya conocido)'));
    fx0 = comprobar(fx0);

    let fx1= (prompt('Introduce FX1 -> (Valor ya conocido)'));
    fx1 = comprobar(fx1);

    let fx2= (prompt('Introduce FX2 -> (Valor ya conocido)'));
    fx2 = comprobar(fx2);

    
    let op1 = ((fx1-fx0)/(x1-x0));
    let op2 = (((fx2-fx1)/(x2-x1))-((fx1-fx0)/(x1-x0)))/(x2-x0);
    let resultado = ((fx0) + (op1*(x-x0)) + (op2*(x-x0)*(x-x1)));
    
        console.log(op1);
        console.log(op2);
        anunciarResultado(resultado);
        return resultado;
}



function interLagrangeUNO() {
    let x = (prompt('Introduce X -> (Valor a Calcular)'));
    x = comprobar(x);

    let x0 = (prompt('Introduce X0 -> (Valor ya conocido)'));
    x0 = comprobar(x0);

    let x1 = (prompt('Introduce X1 -> (Valor ya conocido)'));
    x1 = comprobar(x1);

    let fx0 = (prompt('Introduce FX0 -> (Valor ya conocido)'));
    x1 = comprobar(x1);

    let fx1= (prompt('Introduce FX1 -> (Valor ya conocido)'));
    fx1 = comprobar(fx1);

    let resultado = ((((x-x1)/(x0-x1))*(fx0))+(((x-x0)/(x1-x0))*(fx1)));       
    
        anunciarResultado(resultado);
        return resultado;    
}



function interLagrangeDOS() {
    let x = (prompt('Introduce X -> (Valor a Calcular)'));
    x = comprobar(x);

    let x0 = (prompt('Introduce X0 -> (Valor ya conocido)'));
    x0 = comprobar(x0);

    let x1 = (prompt('Introduce X1 -> (Valor ya conocido)'));
    x1 = comprobar(x1);

    let x2 = (prompt('Introduce X2 -> (Valor ya conocido)'));
    x2 = comprobar(x2);

    let fx0 = (prompt('Introduce FX0 -> (Valor ya conocido)'));
    fx0 = comprobar(fx0);

    let fx1= (prompt('Introduce FX1 -> (Valor ya conocido)'));
    fx1 = comprobar(fx1);

    let fx2= (prompt('Introduce FX2 -> (Valor ya conocido)'));
    fx2 = comprobar(fx2);

    let op1 = ((((x-x1)/(x0-x1))*((x-x2)/(x0-x2)))*fx0);     
    let op2 = ((((x-x0)/(x1-x0))*((x-x2)/(x1-x2)))*fx1);
    let op3 = ((((x-x0)/(x2-x0))*((x-x1)/(x2-x1)))*fx2);
    let resultado = (op1 + op2 + op3);
    
        anunciarResultado(resultado);
        return resultado;
}

function valorRelativo() {

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
    Error Verdadero: ${errorVerdadero} \t\n Error Relativo: ${Math.abs(errorRelativo.toFixed(5))}%`);

}

async function newton() {

  await Swal.fire('', 'Solo puedes usar un maximo de 100 iteraciones');
  await Swal.fire('', 'Esta función utiliza la ecuación: 2cos(x)-e^x y usa solo 5 decimales!');
    
  let x0 = (prompt('Introduce X0 -> (Valor Conocido)'));
  x0 = comprobar(x0);

  let iteraciones = Math.abs((prompt('¿Cuántas Iteraciones?')));
  iteraciones = comprobar(iteraciones);
  if (iteraciones > 100) {
    noDisponible('Demasiadas Iteraciones - MAX 100')
  } 
  

  for (let i = 0; i < iteraciones; i++) {
    
    let fx = (2*Math.cos(x0)-Math.exp(x0)).toFixed(5);
    let dfx = (-2*Math.sin(x0)-Math.exp(x0)).toFixed(5);
    x0 = x0 - ((fx/dfx)).toFixed(5);

  }


  anunciarResultado(`El resultado es:${x0} con ${valorRelativoReutilizable(0.53978, x0)}`)
  return x0
}




// Funciones Reutilizables

function noDisponible(value) {
    anunciarPopUp('NO DISPONIBLE', value, 'error');
}

function proximamente() {
    anunciarPopUp('Proximamente disponible' ,'', 'info')
}

function comprobar(value) {
    if (Number.isNaN(Number(value)) == true || value === undefined || value == '' || value == null) {
        if (value == null) {
          Toast.fire({
            icon: 'warning',
            title: 'CANCELADO'
          }).then(javascript_abort());
        } else {
          anunciarPopUp(anunciarPopUp('UPPS!!!', 'Datos no válidos o incorrectos.', 'warning'));
        }
    } else {
        let val = Number(value);
        console.log(val);
        return val;
    }
}

function javascript_abort()
{
   throw new Error('THIS IS NOT AN ERROR - JAVASCRIPT ABORT');
}

function anunciarResultado(value) {
  console.log('Resultado = ' + value);
  if (Number.isNaN(value) == true) {
      anunciarPopUp('El resultado es indefinido.', '', 'info');
  } else {
      anunciarPopUp('El resultado es:', '' + value, 'success');
  }
}

function anunciarPopUp(messageAlert ,errorMessage, typeMessage, tiempo, otro) {
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


function convertToNumber(value) {
    return Number(value);
}



// Sweet Alert
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

function valorRelativoReutilizable(valorReal, valorAprox) {

  let errorVerdadero = valorReal - valorAprox;
  let errorRelativo = (errorVerdadero / valorReal) * 100;

  if ((Number.isNaN(errorRelativo)) === true) {
      errorRelativo = 0;
  }

  return (`Error Verdadero: ${errorVerdadero} \t\n Error Relativo: ${Math.abs(errorRelativo.toFixed(5))}%`);

}

// async function inputNumber(desc) {

// const { value: resul } = await Swal.fire({
//   title: desc,
//   input: 'number',
//   inputLabel: '',
//   inputValue: '',
//   showCancelButton: true,
//   inputValidator: (value) => {
//     if (!value) {
//       return 'You need to write something!'
//     }
//   }
// })

// }


// SwwetAlert2 ALERTS

//  - success
//  - error
//  - warning
//  - info
//  - question