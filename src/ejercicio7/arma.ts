export default class ArmaNinja {
    private arteMarcial: string
    private arma: string

    constructor(arteMarcial: string, arma: string){
        this.arteMarcial  = arteMarcial
        this.arma = arma
    }

    public ataqueNinja(){
        return `El arma que utiliza el ninja es ${this.arma} y el arte marcial ${this.arteMarcial} `
    }

}