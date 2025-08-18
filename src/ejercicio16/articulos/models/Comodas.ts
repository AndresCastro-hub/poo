import Articulo from "../claseAbstracta/Articulo";

export default class Comodas extends Articulo{
    private superficie: number
    private cantidadDeCajones: number
    constructor(superficie: number, cantidadDeCajones: number){
        super("Comodas", 10, 1)
        this.superficie = superficie
        this.cantidadDeCajones = cantidadDeCajones
    }

    public listarInfo(){
        return `El articulo ${this.getDescripcion()}, la superficie es de ${this.superficie} y la cantidad de cajones es ${this.cantidadDeCajones}`
    }

}