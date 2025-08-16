import Oruga from "./models/oruga";
import Robot from "./robot";
import RuedaDeCaucho from "./models/ruedaDeCaucho";

const traccionCaucho : RuedaDeCaucho = new RuedaDeCaucho()
const traccionOruga : Oruga = new Oruga()

const maquinita : Robot = new Robot("KT-2020-P",10, traccionCaucho  )
const maquinita2: Robot = new Robot("KT-2020-P",10, traccionOruga )

console.log(maquinita.mostrarValues())
console.log(maquinita2.mostrarValues())
