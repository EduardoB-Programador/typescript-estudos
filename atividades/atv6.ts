import { fill } from "./atv5"
/*
Callback functions
- São funções onde pedem com um parâmetro uma outra função para fazer alguma
operação

as callback function mais comuns são as funções de uma lista:

- lista.map() - cria uma nova lista utilizando os valores da lista anterior
e transforma os valores originais em novos valores segundo a função parâmetro.

- lista.forEach() - executa instruções na função parâmetro para cada valor da
lista.

- lista.filter() - cria uma nova lista com apenas os itens da lista original
que passam pela condição existente na função parâmetro.

- lista.reduce() - reune todos os valores da lista em un único valor final.
*/
const lista = ["aslkfjdbfg", "alfjkhjgvhb", "alfdkugb"]

// for (const v of l)

const novalista = lista.map((v, i) => {return {index: i, valor: v}})
console.log(novalista)
const novalista2 = novalista.map((v) => {return v.valor.length})
console.log(novalista2)

novalista2.forEach((v) => {
    if (v % 2 === 0)
        console.log(`O número ${v} é par.`)
    else
        console.log(`O número ${v} é impar.`)
})

const terminamComB = lista.filter((v) => {
    return v.endsWith("b")
})
console.log(terminamComB)

const numsAleatorios: number[] = []
fill(numsAleatorios, 100, 1000)
// numsAleatorios.filter((v) => {return v > 400})
const maior400 = numsAleatorios.filter((v) => v > 400)
console.log(maior400)

const total = maior400.reduce((anterior, atual) => anterior + atual)
console.log(total)