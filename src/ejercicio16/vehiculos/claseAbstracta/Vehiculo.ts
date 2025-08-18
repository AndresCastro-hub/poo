import Articulo from "../../articulos/claseAbstracta/Articulo"

export default abstract class Vehiculo{
    protected items: Articulo[]
    private capacidadDeCarga: number

    constructor(capacidadDeCarga: number){
        this.capacidadDeCarga = capacidadDeCarga
        this.items = []
    }

    public cargar(item : Articulo) : void {
        if(this.items.length < this.capacidadDeCarga){
            this.items.push(item)
        }else{
            console.log(`El articulo ${item.getDescripcion()} no se pudo cargar porque la capacidad de carga maxima son ${this.capacidadDeCarga} articulos`)
        }
    }

  public listarItems() {
        return this.items.map(item => item.getDescripcion())
    }
}