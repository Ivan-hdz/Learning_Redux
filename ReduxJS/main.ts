import { createStore, Store, Reducer, AnyAction } from "redux";
/**
 * Ejemplo de reducer utilizando la libreria redux
 * @param state 
 * @param action 
 */
const calcularReducer: Reducer<number> = (state = 0, action: AnyAction) => {
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
 * Ejemplo de como se usa una store usando la libreria redux
 */
const store: Store = createStore(calcularReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: "SUMAR",
    payload: 7
});
store.dispatch({
    type: "RESTA",
    payload: 5
});
store.dispatch({
    type: "RESTA",
    payload: 1
});
