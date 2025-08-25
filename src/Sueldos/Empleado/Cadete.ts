import AbstractEmpleado from "./AbstractEmpleado";

export default class Cadete extends AbstractEmpleado {
    constructor(numeroDeAusencias: number, porcentajeObjetivo: number) {
        const sueldoDelCadete = 1000
        super(sueldoDelCadete, numeroDeAusencias, porcentajeObjetivo)
    }
}