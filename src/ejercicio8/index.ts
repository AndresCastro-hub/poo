import Guardia from "./guardia";
import Persona from "./persona";
import Visitante from "./visitante";

const personaUno : Persona = new Persona("Andres" , "Castro")

const visitanteUno: Visitante = new Visitante(2043979841, "Visitante" , "Visitante apellido", )

const guardiaUno : Guardia  = new Guardia("Guardia uno", "Guardia apellido")

console.log(guardiaUno.controlarDocumento(439798481))