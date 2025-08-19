const initialValuesFruta = { color : '', peso: 0, esEstacional : false }

export default class Fruta{
    private color: string
    private peso: number
    private esEstacional : boolean


    //Estas son las firmas para typescript pero la implementacion "Real" es el ultimo constructor
    constructor();
    constructor(color: string, peso: number, esEstacional: boolean);

    constructor( color: string = initialValuesFruta.color,  peso : number= initialValuesFruta.peso, esEstacional : boolean = initialValuesFruta.esEstacional ){
        this.color = color 
        this.peso = peso 
        this.esEstacional = esEstacional 
    }

    getColor(){
        return this.color
    }

    getPeso(){
        return this.peso
    }

    getEsEstacional(){
        return this.esEstacional
    }

    setColor(color : string){
        this.color = color
    }

    setPeso(peso: number){
        this.peso = peso
    }

    setEsEstacional(esEstacional : boolean){
        this.esEstacional = esEstacional
    }

    

}