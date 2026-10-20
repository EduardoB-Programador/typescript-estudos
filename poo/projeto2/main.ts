import ContaBancaria from "./ContaBancaria"

const cb = new ContaBancaria("000.000.007-99", "example@example.com", "Álvaro Rodriges Souza Martins", "", 1)

const cb1 = new ContaBancaria("808.760.009-31", "osvaldocz@example.com", "Osvaldo Cruz de Brito", "slkdfjblfdgiug", 2)

// console.log(cb.getCPF())
// console.log(cb.getEmail())
// console.log(cb.getNome())
// let tempDin = cb.getDinheiro()
// tempDin = 1000000000000000
// console.log(cb)

cb.depositar(1000)
cb1.depositar(20000)

console.log(cb.getDinheiro())
console.log(cb1.getDinheiro())

cb1.transferir(cb, 400)

console.log(cb.getDinheiro())
console.log(cb1.getDinheiro())

cb.sacar(100)
cb1.sacar(30000)

console.log(cb.getDinheiro())
console.log(cb1.getDinheiro())