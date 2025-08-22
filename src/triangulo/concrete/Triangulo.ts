import {  AbstractFiguraGeometrica } from "../abstract/AbstractFiguraGeometrica"

export default class Triangulo extends AbstractFiguraGeometrica{

    private base: number
    private altura: number
    private lado1: number
    private lado2: number
    private lado3: number

    constructor(base: number, altura: number, lado1: number, lado2: number, lado3: number){
        super("Triangulo", "Naranja")
        this.base = base
        this.altura = altura
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    public calcularArea(): number {
        return (this.base * this.altura) / 2
    }

    public calcularPerimetro(): number {
        return this.calcularLaSumaDeSusLados()
    }

    private calcularLaSumaDeSusLados() : number{
        return this.lado1 + this.lado2 + this.lado3
    }


}