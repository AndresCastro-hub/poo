import { AbstractFiguraGeometrica } from "../abstract/AbstractFiguraGeometrica";


export default class Cuadrado extends AbstractFiguraGeometrica {
    private lado: number
    constructor(lado: number) {
        super("Cuadrado", "Rojo")
        this.lado = lado;
    }

    public calcularArea(): number {
        return this.lado * this.lado
    }

    public calcularPerimetro(): number {
        return this.lado * 4
    }

}