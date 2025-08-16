import { Traccion } from "./interface/traccion"

export default class Robot {
    private numeroDeSerie: string
    private potenciaDeTraccion: number
    private tipoDeTraccion: Traccion

    constructor(numeroDeSerie: string, potenciaDeTraccion: number, tipoDeTraccion: Traccion) {
        this.numeroDeSerie = numeroDeSerie
        this.potenciaDeTraccion = potenciaDeTraccion
        this.tipoDeTraccion = tipoDeTraccion
    }

    public mostrarValues() {
        const potenciaFinal = this.tipoDeTraccion.calcularPotenciaFinal(this.potenciaDeTraccion)
        return `El numero de serie es: ${this.numeroDeSerie}, la potencia de traccion final es ${potenciaFinal} PTB, 
                el tipo de traccion es ${this.tipoDeTraccion.getTipo()} puede avanzar hasta ${this.tipoDeTraccion.getAlcanceEnKm()} km y la informacion extra es ${this.tipoDeTraccion.getExtras()}   `
    }

}