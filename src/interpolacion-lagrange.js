export default class InterLagrange {

    constructor(x,x0,x1,fx0,fx1,x2 = 'X2 = No necesario',fx2 = 'FX2 = No necesario') {
        this._x = x;
        this._x0 = x0;
        this._x1 = x1;
        this._x2 = x2;
        this._fx0 = fx0;
        this._fx1 = fx1;
        this._fx2 = fx2;
    }
    
    getValues() {
        return [this._x, this._x0, this._x1, this._fx0, this._fx1, this._x2, this._fx2];
    }
    
    getAnswerUno() {
        return ((((this._x-this._x1)/(this._x0-this._x1))*(this._fx0))+(((this._x-this._x0)/(this._x1-this._x0))*(this._fx1)));    
    }

    getAnswerDos() {
        let op1 = ((((this._x-this._x1)/(this._x0-this._x1))*((this._x-this._x2)/(this._x0-this._x2)))*this._fx0);     
        let op2 = ((((this._x-this._x0)/(this._x1-this._x0))*((this._x-this._x2)/(this._x1-this._x2)))*this._fx1);
        let op3 = ((((this._x-this._x0)/(this._x2-this._x0))*((this._x-this._x1)/(this._x2-this._x1)))*this._fx2);
        return (op1 + op2 + op3);
    }
    


} // InterLineal Class Finale