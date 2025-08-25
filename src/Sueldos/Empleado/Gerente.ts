import AbstractEmpleado from "./AbstractEmpleado";

export default class Gerente extends AbstractEmpleado{
    constructor(numeroDeAusencias: number, porcentajeObjetivo: number){
        const sueldoDelGerente = 100000
        super(sueldoDelGerente, numeroDeAusencias, porcentajeObjetivo)
    }
}