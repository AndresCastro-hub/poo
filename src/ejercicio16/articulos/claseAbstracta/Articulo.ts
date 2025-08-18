export default abstract class Articulo{
    private descripcion: string
    private dimensiones: number
    private numeroDeIdentificacion : number

    constructor(descripcion: string, dimensiones: number, numeroDeIdentificacion: number){
        this.descripcion = descripcion
        this.dimensiones = dimensiones
        this.numeroDeIdentificacion = numeroDeIdentificacion
    }

    public getDescripcion(){
        return this.descripcion
    }

    //Esto no era necesario pero lo queria agregar
    abstract listarInfo() : string

}