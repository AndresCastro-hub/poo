import { AbstractFiguraGeometrica } from "../abstract/AbstractFiguraGeometrica"

export default class Circulo extends AbstractFiguraGeometrica {
    private numeroPi: number
    private radio: number

    constructor(radio: number) {
        super("Circulo", "Verde")
        this.numeroPi = 3.14
        this.radio = radio
    }

    public calcularArea(): number {
        const radioAlCuadrado = (this.radio * this.radio)
        return this.numeroPi * radioAlCuadrado
    }

    public calcularPerimetro(): number {
        return 2 * this.numeroPi * this.radio
    }


}