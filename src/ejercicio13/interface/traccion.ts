export interface Traccion {
    getTipo(): string
    getCantidadHpQueResta(): number
    getAlcanceEnKm(): number
    getExtras(): string
    calcularPotenciaFinal(potenciaBase: number): number

}