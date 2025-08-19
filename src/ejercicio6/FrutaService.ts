import Fruta from "./Fruta"

export default class FrutaService{
    public esComestible(fruta: Fruta){
        return fruta.getPeso() < 200 && fruta.getEsEstacional()
    }

    public getValores(fruta:Fruta){
        return `El color es ${fruta.getColor()} , su peso es: ${fruta.getPeso()} `
    }
}