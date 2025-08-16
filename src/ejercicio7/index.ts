import ArmaNinja from "./arma";
import Ninja from "./ninja";


const ataqueUno: ArmaNinja = new ArmaNinja("Boxeo", "Guantes")
const ataqueDos : ArmaNinja = new ArmaNinja("Taekwondo", "Traje blanco")

const ninjaUno: Ninja = new Ninja( 20 , 10, ataqueUno)
const ninjaDos : Ninja = new Ninja(10, 5 , ataqueDos )


console.log(
    ninjaDos.ataque(),
    ninjaDos.saltar(20)
)