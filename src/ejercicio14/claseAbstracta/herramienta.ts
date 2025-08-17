
export default abstract class Herramienta{
    private peso: number
    private tipo: string
    
    constructor(tipo: string, peso: number, ){
        this.tipo = tipo
        this.peso = peso
    }

    getPeso(){
        return this.peso
    }

    getTipo(){
        return this.tipo
    }

    setPeso(peso: number){
        this.peso = peso
    }

    setTipo(tipo: string){
        this.tipo = tipo
    }

}