/*
Faça uma lista com 100 números variando de 1 a 100.
Usando a função map() faça uma lista a partir da lista original com todos
os valores MÚLTIPLOS DE 5 seguindo a seguinte expressão:
(valor + 5) * 3
os outros valores não múltiplos de 5 devem seguir a seguinte expressão:
valor * 10
coloque o resultado do map() em uma nova lista

E então, use a função filter() para filtrar apenas os valores menores que 100
da nova lista, armazene o resultado do filter() em uma nova lista

e então use a função reduce() para somar todos os valores resultantes da
lista da função filter() e armazene em uma variável

ao fim mostre o resultado da soma no terminal
*/

import { fill } from "../atividades/atv5";

const lista: number[] = []
// fill(lista, 100, 100)
for (let i = 1; i <= 100; i++)
    lista.push(i)

const multiplicado = lista.map((v) => {
    if (v % 5 === 0) {
        return (v + 5) * 3
    } else {
        return v * 10
    }
})

const filtrado = multiplicado.filter((v) => v < 100)
const total = filtrado.reduce((anterior, atual) => anterior + atual)

console.log(lista)
console.log(multiplicado)
console.log(filtrado)
console.log(total)