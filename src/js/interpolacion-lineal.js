// Métodos Numéricos
// Alumnos: Diego Gentner Polanco & Brandon Tapia
// 2do Semestre Grupo "H"

export default class InterLineal {

    constructor(x,x0,x1,fx0,fx1) {
        this._x = x;
        this._x0 = x0;
        this._x1 = x1;
        this._fx0 = fx0;
        this._fx1 = fx1;
    }

    getValues() {
        return [this._x, this._x0, this._x1, this._fx0, this._fx1];
    }

    getAnswer() {
        return (((this._fx0)+(((this._fx1)-(this._fx0))/((this._x1)-(this._x0)))*((this._x)-(this._x0))));
    }



} // InterLineal Class Finale