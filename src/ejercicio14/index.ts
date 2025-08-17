import Dron from "./dron";
// import BrazoRobotico from "./models/brazoRobotico";
import SensorInfrarrojo from "./models/sensorInfrarrojo";
// import Taser from "./models/taser";
import ReglasDeVuelo from "./reglasDeVuelo";

const herramientaSensor : SensorInfrarrojo = new SensorInfrarrojo()
// const herramientaTaser: Taser = new Taser()
// const herramientaBrazoRobotico: BrazoRobotico = new BrazoRobotico()
const reglas: ReglasDeVuelo = new ReglasDeVuelo()

const dronUno: Dron = new Dron( herramientaSensor, reglas  )

console.log(dronUno.mostrarDatos())