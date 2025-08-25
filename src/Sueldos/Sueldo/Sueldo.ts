import AbstractBono from "../Bono/AbstractBono";
import AbstractEmpleado from "../Empleado/AbstractEmpleado";

export default class Sueldo{
    private empleado : AbstractEmpleado
    private bonoPresentismo : AbstractBono
    private bonoPorObjetivo : AbstractBono
    constructor(empleado : AbstractEmpleado, bonoPresentismo: AbstractBono, bonoPorObjetivo : AbstractBono){
        this.empleado = empleado
        this.bonoPresentismo = bonoPresentismo
        this.bonoPorObjetivo = bonoPorObjetivo
    }

    public calcularSueldo() : number{
        const sueldoDelEmpleado = this.empleado.getSueldo()
        const valorDelBonoPorPresentismo= this.bonoPresentismo.calcular(this.empleado)
        const valorDelPremioPorObjetivo = this.bonoPorObjetivo.calcular(this.empleado)
        return sueldoDelEmpleado + valorDelBonoPorPresentismo + valorDelPremioPorObjetivo
    }
}