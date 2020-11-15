/**
 * Action
 * Una acción esta conformada por un tipo (obligatorio)
 * y una carga util de datos opcional
 */
export interface Action<T> {
    type: string;
    payload?: T;
}