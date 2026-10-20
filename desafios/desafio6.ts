import { fill } from "../atividades/atv5";

/*
Crie uma lista e preencha ela com a função fill, coloque 100 números, sendo o
maior possível o número 100.

Faça um algoritmo que passe por cada um dos itens da lista e procure por
um número alvo, caso encontre, esse algoritmo deve retornar o índice desse
valor, caso contrário retorne -1
*/

const lista: number[] = []
fill(lista, 100, 100)

function linearSearch(lista: number[], alvo: number) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === alvo)
            return i
    }
    return -1
}

console.log(lista)
console.log(linearSearch(lista, 32))