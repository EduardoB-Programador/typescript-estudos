/*
Crie um type (tipo) de uma função, essa função deve receber 2 parâmetros:

texto1 - string
texto2 - string

Essa função também deve retornar uma string. Faça essa função retornar a
junção do texto1 e texto2.

E mostre no terminal a junção dos textos usando a função.

Use a função com os seguintes valores:
- "formula" e "1"
- "guarda-" e "chuva"
*/

type fun1 = (texto1:string, texto2:string) => string

const juntar:fun1 = (texto1:string, texto2: string) => {
    return texto1 + texto2
}

const res1 = juntar("formula", "1")
const res2 = juntar("guarda-", "chuva")

console.log(res1)
console.log(res2)