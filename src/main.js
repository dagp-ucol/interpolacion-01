// Programación Orientada a Objetos
// Alumno: Diego Alejandro Gentner Polanco
// 2do Semestre Grupo "H"

function interLineal() {
    let x = Number(prompt('Introduce X -> (Valor a Calcular)'));
    comprobar(x);

    let x0 = Number(prompt('Introduce X0 -> (Valor ya conocido)'));
    comprobar(x0);

    let x1 = Number(prompt('Introduce X1 -> (Valor ya conocido)'));
    comprobar(x1);

    let fx0 = Number(prompt('Introduce FX0 -> (Valor ya conocido)'));
    comprobar(fx0);

    let fx1= Number(prompt('Introduce FX1 -> (Valor ya conocido)'));
    comprobar(fx1);

    
    let resultado = Number(((fx0)+(((fx1)-(fx0))/((x1)-(x0)))*((x)-(x0))));
    
        anunciarResultado(resultado);
        return resultado;
}



function interCuadratica() {
    let x = Number(prompt('Introduce X -> (Valor a Calcular)'));
    comprobar(x);

    let x0 = Number(prompt('Introduce X0 -> (Valor ya conocido)'));
    comprobar(x0);

    let x1 = Number(prompt('Introduce X1 -> (Valor ya conocido)'));
    comprobar(x1);

    let x2 = Number(prompt('Introduce X2 -> (Valor ya conocido)'));
    comprobar(x2);

    let fx0 = Number(prompt('Introduce FX0 -> (Valor ya conocido)'));
    comprobar(fx0);

    let fx1= Number(prompt('Introduce FX1 -> (Valor ya conocido)'));
    comprobar(fx1);

    let fx2= Number(prompt('Introduce FX2 -> (Valor ya conocido)'));
    comprobar(fx2);
    
    let op1 = ((fx1-fx0)/(x1-x0));
    let op2 = (((fx2-fx1)/(x2-x1))-((fx1-fx0)/(x1-x0)))/(x2-x0);
    let resultado = Number((fx0) + (op1*(x-x0)) + (op2*(x-x0)*(x-x1)));
    
        anunciarResultado(resultado);
        return resultado;
}



function interLagrangeUNO() {
    let x = Number(prompt('Introduce X -> (Valor a Calcular)'));
    comprobar(x);

    let x0 = Number(prompt('Introduce X0 -> (Valor ya conocido)'));
    comprobar(x0);

    let x1 = Number(prompt('Introduce X1 -> (Valor ya conocido)'));
    comprobar(x1);

    let fx0 = Number(prompt('Introduce FX0 -> (Valor ya conocido)'));
    comprobar(fx0);

    let fx1= Number(prompt('Introduce FX1 -> (Valor ya conocido)'));
    comprobar(fx1);

    let resultado = Number((((x-x1)/(x0-x1))*(fx0))+(((x-x0)/(x1-x0))*(fx1)));       
    
        anunciarResultado(resultado);
        return resultado;    
}



function interLagrangeDOS() {
    let x = Number(prompt('Introduce X -> (Valor a Calcular)'));
    comprobar(x);

    let x0 = Number(prompt('Introduce X0 -> (Valor ya conocido)'));
    comprobar(x0);

    let x1 = Number(prompt('Introduce X1 -> (Valor ya conocido)'));
    comprobar(x1);

    let x2 = Number(prompt('Introduce X2 -> (Valor ya conocido)'));
    comprobar(x2);

    let fx0 = Number(prompt('Introduce FX0 -> (Valor ya conocido)'));
    comprobar(fx0);

    let fx1= Number(prompt('Introduce FX1 -> (Valor ya conocido)'));
    comprobar(fx1);

    let fx2= Number(prompt('Introduce FX2 -> (Valor ya conocido)'));
    comprobar(fx2);

    let op1 = ((((x-x1)/(x0-x1))*((x-x2)/(x0-x2)))*fx0);     
    let op2 = ((((x-x0)/(x1-x0))*((x-x2)/(x1-x2)))*fx1);
    let op3 = ((((x-x0)/(x2-x0))*((x-x1)/(x2-x1)))*fx2);
    let resultado = Number(op1 + op2 + op3);
    
        anunciarResultado(resultado);
        return resultado;
}

function valorRelativo() {

    let valorReal = Number(prompt('Introduce el VALOR REAL'));
    comprobar(valorReal);

    let valorAprox = Number(prompt('Introduce el VALOR APROXIMADO'));
    comprobar(valorAprox);

    let errorVerdadero = valorReal - valorAprox;
    let errorRelativo = (errorVerdadero / valorReal) * 100;

    anunciarResultado2(`
    Error Verdadero: ${errorVerdadero}
    Error Relativo: ${errorRelativo.toFixed(3)}%`);
    return resultado;

}


// Funciones Reutilizables

function noDisponible() {
    alert('Operación NO Disponible')
}

function proximamente() {
    alert('PRÓXIMAMENTE...')
}

function comprobar(value) {
    if (Number.isNaN(value) === true || value === undefined) {
        alert(`DATO NO VÁLIDO = ${value}`)
        return javascript_abort();
    }
}

function javascript_abort()
{
   throw new Error('ERROR DE DATOS');
}

function anunciarResultado(value) {
    console.log('Resultado = ' + value);
    if (Number.isNaN(value) === true) {
        alert(`VALORES NO VÁLIDOS`);
    } else {
        alert(`El RESULTADO de F(X) = ${value}`);
    }
}

function anunciarResultado2(value) {
    console.log('Resultado = ' + value);
    if (Number.isNaN(value) === true) {
        alert(`VALORES NO VÁLIDOS`);
    } else {
        alert(`El RESULTADO = ${value}`);
    }
}