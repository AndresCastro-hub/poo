import AbstractEmpleado from "./AbstractEmpleado";

export default class Operador extends AbstractEmpleado {
    constructor(numeroDeAusencias: number, porcentajeObjetivo: number) {
        const sueldoDelOperador = 10500
        super(sueldoDelOperador, numeroDeAusencias, porcentajeObjetivo)
    }
}