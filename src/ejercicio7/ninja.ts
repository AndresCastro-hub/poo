import ArmaNinja from "./arma";

export default class Ninja{

    private fuerza: number
    private salto: number
    private ataqueObj: ArmaNinja

    constructor( fuerza: number, salto: number, ataqueObj: ArmaNinja){
        this.fuerza = fuerza
        this.salto = salto
        this.ataqueObj = ataqueObj
    }

    //Faltaron los setters y getters

    public saltar( multiplicador: number ){
        return this.salto * multiplicador;
    }

    public ataque(){
        return  this.ataqueObj.ataqueNinja()
    }
    
}