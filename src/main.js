// Programación Orientada a Objetos
// Alumno: Diego Alejandro Gentner Polanco
// 2do Semestre Grupo "H"

let x = prompt('Hola')
import Metnum from './operaciones.js'

let test01 = new Metnum();
console.log(test01.interLineal(5521500000,521500,54546,8524,552))

function interLineal(x,x0,x1,fx0,fx1) {
    let resul = fx0 + ((fx1-fx0)/(x1-x0))*(x-x0)
    return resul
}
console.log(interLineal(521500,521500,5215,5215,5215))
console.log()