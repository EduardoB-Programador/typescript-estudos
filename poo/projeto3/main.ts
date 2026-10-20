import Computador from './Computador';
import Dispositivo from './Dispositivo';
import Telefone from './Telefone';

const dispo1 = new Dispositivo()

dispo1.verificarEstado()
dispo1.onOff()
dispo1.verificarEstado()

const tel1 = new Telefone("2199999-9999")
const tel2 = new Telefone("2199999-9998")

tel1.adicionarContato("2188888-8888")
tel1.adicionarContato("2188888-8889")
tel1.adicionarContato("2188888-8890")
tel1.adicionarContato("2188888-8891")

console.log(tel1.contatos)

tel1.removerContato("2188888-8890")

console.log(tel1.contatos)

tel2.onOff()
tel2.verificarEstado()

const comp1 = new Computador("Lenobo", "MS DOS", 15, "zyren 9 3D3X0699")
const comp2 = new Computador("Dello", "Hannah Montana Linux", 12, "i3 3380")

comp1.onOff()
comp1.verificarEstado()
comp1.programar()

comp2.programar()