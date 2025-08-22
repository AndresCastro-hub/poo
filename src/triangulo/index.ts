import Circulo from "./concrete/Circulo"
import Cuadrado from "./concrete/Cuadrado"


const cuadrado : Cuadrado = new Cuadrado(5)
const areaDelCuadrado  = cuadrado.calcularArea()
cuadrado.calcularPerimetro()

const circulo : Circulo = new Circulo(10)
const areaDelCirculo = circulo.calcularArea()
const perimetroDelCiruclo = circulo.calcularPerimetro()

console.log(areaDelCirculo)