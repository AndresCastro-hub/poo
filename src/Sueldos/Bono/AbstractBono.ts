import AbstractEmpleado from "../Empleado/AbstractEmpleado";

export default abstract class AbstractBono{
    abstract calcular( empleado? : AbstractEmpleado) : number
}