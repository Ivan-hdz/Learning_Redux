import { Reducer } from "./Reducer";
import { Store } from "./Store";
/**
 * Ejemplo de reducer
 * @param state Estado que recibe el reducer
 * @param action Acción que realizará el reducer
 */
const calcularReducer: Reducer<number> = (state = 0, action) => {
    switch (action.type) {
        case "SUMAR":
            return state + action.payload;
        case "RESTA":
            return state - action.payload;
        default:
            return state;
    }
}
/**
 * Ejemplo de como se usa la Store dado un reducer
 */
const store = new Store<number>(calcularReducer);

store.dispatch({
    type: "SUMAR",
    payload: 7
});
console.log(store.getState())
store.dispatch({
    type: "RESTA",
    payload: 5
});
console.log(store.getState())
store.dispatch({
    type: "RESTA",
    payload: 1
});
console.log(store.getState())
