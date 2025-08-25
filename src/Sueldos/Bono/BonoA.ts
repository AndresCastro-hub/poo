import AbstractEmpleado from "../Empleado/AbstractEmpleado";
import AbstractBono from "./AbstractBono";

export default class BonoA extends AbstractBono {
    public calcular(empleado: AbstractEmpleado): number {
        const bonoValues  = [ {cantidadAusencias: 0, valor: 1000}, {cantidadAusencias: 1 , valor: 450}]
        const numeroDeAusencias = empleado.getNumeroDeAusencias()
        const valorDelBonoA = bonoValues.find( value => value.cantidadAusencias === numeroDeAusencias )?.valor

        return valorDelBonoA ?? 0
    }
}