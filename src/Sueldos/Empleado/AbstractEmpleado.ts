export default abstract class AbstractEmpleado{
    private sueldo: number
    private numeroDeAusencias: number
    private porcentajeObjetivo: number
    constructor(sueldo: number, numeroDeAusencias: number, porcentajeObjetivo: number){
        this.sueldo = sueldo
        this.numeroDeAusencias = numeroDeAusencias
        this.porcentajeObjetivo = porcentajeObjetivo
    }
    
    public getNumeroDeAusencias(): number{
        return this.numeroDeAusencias
    }

    public getPorcentajeObjetivo() : number{
        return this.porcentajeObjetivo
    }

    public getSueldo(): number{
        return this.sueldo
    }
}