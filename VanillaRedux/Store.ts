import { Action } from "./Action";
import { Reducer } from "./Reducer";
/**
 * NUNCA SE MODIFICA EL STORE DIRECTAMENTE
 * La store almacena el estado actual, recibe 
 * un reducer, el valor inicial del estado se obtiene
 * del valor por defecto que se le asigna al estado que recibe
 * el reducer
 */
export class Store<T> {
    private state: T
    constructor( private reducer: Reducer<T>) {}
    
    getState(): T {
        return this.state;
    }
    dispatch( action: Action<T>) {
        this.state = this.reducer(this.getState(), action);
    }
}