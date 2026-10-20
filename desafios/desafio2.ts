/*
Crie um tipo de um objeto Pessoa onde possua as seguintes propriedades 
com os seguintes tipos:

cpf - string
nome - string
altura - numero
peso - numero

depois disso, crie 2 objetos com o tipo pessoa e defina suas propriedades
*/

type Pessoa = {
    cpf: string,
    nome: string,
    altura: number,
    peso: number
}

const p1: Pessoa = {
    cpf: "999.888.777-66",
    nome: "Bellatrix",
    altura: 1.8,
    peso: 65
}

const p2: Pessoa = {
    cpf: '888.777.666-55',
    nome: "Alphard",
    altura: 1.4,
    peso: 50
}