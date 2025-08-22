export abstract class AbstractFiguraGeometrica{
    private nombre: string
    private color: string

    constructor(nombre: string, color : string){
        this.nombre = nombre
        this.color = color
    }

    public getNombre(): string{
        return this.nombre
    }

    public setNombre(nombre: string) : void{
        this.nombre = nombre
    } 

    public getColor() : string{
        return this.color
    }

    public setColor(color:string) : void{
        this.color = color
    }

    public abstract calcularArea() : number

    public abstract calcularPerimetro() : number

}