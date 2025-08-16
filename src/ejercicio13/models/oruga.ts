import TraccionBase from "../claseAbstracta/traccionBase";

export default class Oruga extends TraccionBase{
    constructor(){
        super("Oruga", 3 , 40)
    }

    getExtras() {
        return `Incorpora sensores Meke-M0 que le permiten conocer la temperatura.`
    }
}