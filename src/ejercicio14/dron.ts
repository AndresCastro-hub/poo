import Herramienta from "./claseAbstracta/herramienta"
import ReglasDeVuelo from "./reglasDeVuelo";


export default class Dron {

    private tipoDeHerramienta: Herramienta
    private reglas: ReglasDeVuelo

    constructor(tipoDeHerramienta: Herramienta, reglas: ReglasDeVuelo) {
        this.tipoDeHerramienta = tipoDeHerramienta
        this.reglas = reglas
    }

    public mostrarDatos() {
        return `El tipo de herramienta es ${this.tipoDeHerramienta.getTipo()} su peso es ${this.tipoDeHerramienta.getPeso()} la velocidad es ${this.reglas.calcularVelocidadFinal(this.tipoDeHerramienta)} y la altura es ${this.reglas.calcularAlturaFinal(this.tipoDeHerramienta)}`
    }

}