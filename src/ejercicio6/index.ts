import Fruta from "./Fruta";
import FrutaService from "./FrutaService";

const naranja: Fruta = new Fruta("Naranja", 2, true)
const frutaService : FrutaService = new FrutaService()

console.log(frutaService.getValores(naranja))

const manzana : Fruta = new Fruta()
