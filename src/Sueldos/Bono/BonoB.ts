import AbstractEmpleado from "../Empleado/AbstractEmpleado";
import AbstractBono from "./AbstractBono";

export default class BonoB extends AbstractBono{
    calcular(): number {
        const valorDelBonoB = 500;
        return valorDelBonoB
    }
}