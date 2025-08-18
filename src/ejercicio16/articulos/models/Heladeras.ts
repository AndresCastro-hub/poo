import Articulo from "../claseAbstracta/Articulo";

export default class Heladeras extends Articulo{
    private voltajeAlQueTrabaja: number
    private contieneFreezer: boolean
    constructor(voltajeAlQueTrabaja: number, contieneFreezer: boolean){
        super("Heladeras", 15, 2)
        this.voltajeAlQueTrabaja = voltajeAlQueTrabaja
        this.contieneFreezer = contieneFreezer
    }

    public listarInfo(){
        return `El articulo ${this.getDescripcion()}, el voltaje al que trabaja es ${this.voltajeAlQueTrabaja} wats y ${this.contieneFreezer ? 'si' : 'no'} contiene freezer`
    }
}