import Persona from "./persona";

export default class Visitante extends Persona{
    private dni:number

    constructor(dni: number, nombre: string, apellido :string ){
        super(nombre , apellido)
        this.dni = dni
    }

    getDni(){
        return this.dni
    }

    setDni(dni:number){
        this.dni = dni
    }
}