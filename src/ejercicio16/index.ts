import Comodas from "./articulos/models/Comodas";
import Heladeras from "./articulos/models/Heladeras";
import Auto from "./vehiculos/models/Auto";
import Camioneta from "./vehiculos/models/Camioneta";

const comodasArticulo = new Comodas(10, 10)
const heladeraArticulo = new Heladeras(100, true)


const transporteAuto : Auto = new Auto()
transporteAuto.cargar(comodasArticulo)
transporteAuto.cargar(comodasArticulo)
transporteAuto.cargar(comodasArticulo)
transporteAuto.cargar(comodasArticulo)
transporteAuto.cargar(comodasArticulo)
transporteAuto.cargar(comodasArticulo)

// console.log(transporteAuto.listarItems())


const transporteCamioneta: Camioneta = new Camioneta()

transporteCamioneta.cargar(comodasArticulo)
transporteCamioneta.cargar(comodasArticulo)
transporteCamioneta.cargar(comodasArticulo)
transporteCamioneta.cargar(comodasArticulo)
transporteCamioneta.cargar(comodasArticulo)
transporteCamioneta.cargar(comodasArticulo)
transporteCamioneta.cargar(heladeraArticulo)
transporteCamioneta.cargar(heladeraArticulo)
transporteCamioneta.cargar(heladeraArticulo)
transporteCamioneta.cargar(heladeraArticulo)
transporteCamioneta.cargar(heladeraArticulo)

console.log(transporteCamioneta.listarItems())

