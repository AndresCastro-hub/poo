import AbstractEmpleado from "../Empleado/AbstractEmpleado";
import AbstractBono from "./AbstractBono";

export default class BonoPorResultados extends AbstractBono {
    public calcular(empleado?: AbstractEmpleado): number {
        const porcentajeDelObjetivo = empleado?.getPorcentajeObjetivo()
        const sueldoDelEmpleado = empleado?.getSueldo()
        const diezPorCientoDelSalario = (sueldoDelEmpleado as number * 10) / 100
        const valoresDelBonoPorResultado = [
            { porcentaje: 100, valor: diezPorCientoDelSalario },
            { porcentaje: 80, valor: 800 }
        ]

        const valorDelBono = valoresDelBonoPorResultado.find(value => value.porcentaje === porcentajeDelObjetivo )?.valor

        return valorDelBono ?? 0
    }
}