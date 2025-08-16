import Persona from "./persona";

export default class Guardia extends Persona{
    presentarse(): string {
        return `Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia.`
    }

    public controlarDocumento(dni : number){
        return `Adelante ${this.getNombre()} ${this.getApellido()} con dni ${dni} `
    }
}