import BonoA from "./Bono/BonoA";
import BonoB from "./Bono/BonoB";
import BonoPorResultados from "./Bono/BonoPorResultados";
import Administrativo from "./Empleado/Administrativo";
import Cadete from "./Empleado/Cadete";

import Gerente from "./Empleado/Gerente";
import Operador from "./Empleado/Operador";
import Sueldo from "./Sueldo/Sueldo";

const gerente: Gerente = new Gerente(0, 100)
const adminstrativo  : Administrativo = new Administrativo(0 , 80)
const operador: Operador  = new Operador(1, 0)
// const cadete : Cadete = new Cadete()

const bonoA: BonoA = new BonoA()
const bonoB: BonoB  = new BonoB()

const bonoPorResultados : BonoPorResultados = new BonoPorResultados()

const sueldo1 = new Sueldo(operador, bonoA, bonoPorResultados);
console.log(sueldo1.calcularSueldo())