// Programación Orientada a Objetos
// Alumno: Diego Alejandro Gentner Polanco
// 2do Semestre Grupo "H"

// import Metnum from './operaciones.js'

// let test01 = new Metnum();
// console.log(test01.interLineal(5521500000,521500,54546,8524,552))

function interLineal() {
    let equis = Number(prompt('Introduce X -> (Valor a Calcular)'))
    if (Number.isNaN(equis) === true || equis === undefined) {
        return alert('DATO NO VALIDO');
    }
    let equisCero = Number(prompt('Introduce X0 -> (Valor ya conocido)'))
    if (Number.isNaN(equisCero) === true || equis === undefined) {
        return alert('DATO NO VALIDO');
    }
    let equisUno = Number(prompt('Introduce X1 -> (Valor ya conocido)'))
    if (Number.isNaN(equisUno) === true || equis === undefined) {
        return alert('DATO NO VALIDO');
    }
    let efeEquisCero = Number(prompt('Introduce FX0 -> (Valor ya conocido)'))
    if (Number.isNaN(efeEquisCero) === true || equis === undefined) {
        return alert('DATO NO VALIDO');
    }
    let efeEquisUno= Number(prompt('Introduce FX1 -> (Valor ya conocido)'))
    if (Number.isNaN(efeEquisUno) === true || equis === undefined) {
        return alert('DATO NO VALIDO');
    }
    
    let resultado = Number(((efeEquisCero)+(((efeEquisUno)-(efeEquisCero))/((equisUno)-(equisCero)))*((equis)-(equisCero))));
    console.log(resultado);
    
        if (Number.isNaN(resultado) === true) {
            alert(`VALORES NO VÁLIDOS`)
        } else {
            alert(`El resultado es ${resultado}`);
        }
}



function interCuadratica() {
    noDisponible()     
}



function interLagrangeUNO() {
    noDisponible()
}



function interLagrangeDOS() {
    noDisponible()
}

function noDisponible() {
    alert('Operación NO Disponible')
}