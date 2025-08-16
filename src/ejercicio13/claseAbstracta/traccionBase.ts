import { Traccion } from "../interface/traccion"

export default abstract class TraccionBase implements Traccion{
    protected tipo: string
    protected restaHp: number
    protected alcance : number

    constructor(tipo: string, restaHp: number , alcance: number){
        this.tipo = tipo
        this.restaHp = restaHp
        this.alcance = alcance
    }

    getTipo(): string {
        return this.tipo;
    }

    getCantidadHpQueResta(): number {
        return this.restaHp
    }

    getAlcanceEnKm(): number {
        return this.alcance
    }

    abstract getExtras(): string;

    public calcularPotenciaFinal(potenciaBase: number): number {
        return potenciaBase - this.restaHp
    }

}