import TraccionBase from "../claseAbstracta/traccionBase";

export default class RuedaDeCaucho extends TraccionBase{
    constructor(){
        super("Rueda de caucho", 1 , 100)
    }

    getExtras(){
        return `se tiene que reemplazar cuando no va mas`
    }
}