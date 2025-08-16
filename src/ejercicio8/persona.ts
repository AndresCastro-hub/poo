export default class Persona{
    private nombre: string
    private apellido: string

    constructor(nombre: string , apellido: string){
        this.nombre = nombre
        this.apellido = apellido
    }

    getNombre(){
        return this.nombre
    }

    getApellido(){
        return this.apellido
    }

    setNombre(nombre : string){
        this.nombre = nombre
    }

    setApellido(apellido: string){
        this.apellido = apellido
    }

    presentarse(){
        return `Mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`
    }

}