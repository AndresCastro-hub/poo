import Herramienta from "./claseAbstracta/herramienta"

export default class ReglasDeVuelo{

    private pesoBase: number = 200
    private velocidadBase: number = 5
    private alturaBase: number = 100

    public calcularVelocidadFinal(herramienta : Herramienta){
        const pesoExtra = herramienta.getPeso() - this.pesoBase
        let velocidadFinal = this.velocidadBase

        if(pesoExtra > 0){
            let bloques = 0
            let resto = pesoExtra 
            while(resto >= 50){
                bloques++
                resto = resto - 50
            }
            velocidadFinal = this.velocidadBase * ( 1 - 0.02 * bloques)
        }
        return velocidadFinal

    }

    public calcularAlturaFinal(herramienta: Herramienta){
         const pesoExtra = herramienta.getPeso() - this.pesoBase
        let alturaFinal = this.alturaBase

        if (pesoExtra > 0) {
            let bloques = 0
            let resto = pesoExtra
            while (resto >= 50) {
                bloques++
                resto -= 50
            }

            alturaFinal = this.alturaBase * (1 - 0.05 * bloques)
        }

        return alturaFinal
    }

}