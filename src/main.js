// Programación Orientada a Objetos
// Alumno: Diego Alejandro Gentner Polanco
// 2do Semestre Grupo "H"

// import Metnum from './operaciones.js'

// let test01 = new Metnum();
// console.log(test01.interLineal(5521500000,521500,54546,8524,552))

function interLineal() {
    let x = 1;
    let equis = Number(prompt('Introduce X -> (Valor a Calcular)'))
    let equisCero = Number(prompt('Introduce X0 -> (Valor ya conocido)'))
    let equisUno = Number(prompt('Introduce X1 -> (Valor ya conocido)'))
    let efeEquisCero = Number(prompt('Introduce FX0 -> (Valor ya conocido)'))
    let efeEquisUno= Number(prompt('Introduce FX1 -> (Valor ya conocido)'))

    let resultado = Number(((efeEquisCero)+(((efeEquisUno)-(efeEquisCero))/((equisUno)-(equisCero)))*((equis)-(equisCero))));
    console.log(resultado);
    
        if (Number.isNaN(resultado) === true) {
            alert(`VALORES NO VÁLIDOS`)
        } else {
            alert(`El resultado es ${resultado}`);
        }
}