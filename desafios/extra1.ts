/*
Crie uma função chamada contador, ela deve receber 1 parâmetro:

texto - string
"Lorem ipsum dolor sit amet"
A função deve pegar esse parâmetro texto e dividir ele em uma lista 
de palavras, então ele deverá retornar um objeto com as seguintes
propriedades:

- palavras: number
- listaPalavras: string[]
- listaTamanhos: number[]

palavras deve ser a quantidade de palavras que o texto possui.
listaPalavras deve ser uma lista de todas as palavras do texto.
listaTamanos deve ser uma lista dos tamanhos de cada palavra do texto.
*/

type PalavrasObj = {
    palavras: number,
    listaPalavras: string[],
    listaTamanhos: number[]
}

function contador(texto: string): PalavrasObj {
    const lp = texto.split(" ")
    const qntd = lp.length

    let lt: number[] = []

    // for (let i = 0; i < lp.length; i++) {
    //     const palavra = lp[i]
    //     const tamanho = palavra.length

    //     lt.push(tamanho)
    // }

    // for (const p of lp) {
    //     const tamanho = p.length

    //     lt.push(tamanho)
    // }

    lt = lp.map((v) => v.length)

    return {
        palavras: qntd,
        listaPalavras: lp,
        listaTamanhos: lt
    }
}


console.log(contador("Lorem ipsum dolor sit amet"))
console.log(contador("Eduardo Braga Ferreira da Silva"))