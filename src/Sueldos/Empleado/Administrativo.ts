import AbstractEmpleado from "./AbstractEmpleado";

export default class Administrativo extends AbstractEmpleado {
    constructor(numeroDeAusencias: number, porcentajeObjetivo: number) {
        const sueldoDelAdministrativo = 40000
        super(sueldoDelAdministrativo, numeroDeAusencias, porcentajeObjetivo)
    }
}