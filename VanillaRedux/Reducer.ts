import { Action } from "./Action";

/**
 * Reducer
 * El reducer es una función pura que
 * recibe un estado y una acción y devuelve
 * un nuevo estado
 */
export interface Reducer<T> {
    (state: T, action: Action<T>): T
}