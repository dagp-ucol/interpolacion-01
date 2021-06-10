export default class InterCuadratica {

    constructor(x,x0,x1,x2,fx0,fx1,fx2) {
        this._x = x;
        this._x0 = x0;
        this._x1 = x1;
        this._x2 = x2;
        this._fx0 = fx0;
        this._fx1 = fx1;
        this._fx2 = fx2;
    }
    
    getValues() {
        return [this._x, this._x0, this._x1, this._x2, this._fx0, this._fx1, this._fx2];
    }
    
    getAnswer() {
        let op1 = ((this._fx1-this._fx0)/(this._x1-this._x0));
        let op2 = (((this._fx2-this._fx1)/(this._x2-this._x1))-((this._fx1-this._fx0)/(this._x1-this._x0)))/(this._x2-this._x0);
        return ((this._fx0) + (op1*(this._x-this._x0)) + (op2*(this._x-this._x0)*(this._x-this._x1)));        
    }
    

} // InterLineal Class Finale