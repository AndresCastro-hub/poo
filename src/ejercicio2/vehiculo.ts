export default class Vehiculo{
    public marca: string
    public modelo: string
    private patente: string

    constructor(marca : string, modelo : string,patente: string){
        this.marca = marca
        this.modelo = modelo
        this.patente = patente
    }

    getParametros(){
        return `La marca es ${this.marca} el modelo es ${this.modelo} y su patente es ${this.patente}`
    }

}