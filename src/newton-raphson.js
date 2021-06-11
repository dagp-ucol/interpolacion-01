export default class NewtonRaphson {

    constructor(x0, iteraciones) {
        this._x0 = x0;
        this._iteraciones = iteraciones;
    }
    
    getValues() {
        return [this._x0, this._iteraciones];
    }
    
    getAnswer() {
        for (let i = 0; i < this._iteraciones; i++) {
    
            let fx = (2*Math.cos(this._x0)-Math.exp(this._x0)).toFixed(5);
            let dfx = (-2*Math.sin(this._x0)-Math.exp(this._x0)).toFixed(5);
            x0 = x0 - ((fx/dfx)).toFixed(5);
        
          }     
    }

    _denyOperations() {
        
    }
    

} // InterLineal Class Finale