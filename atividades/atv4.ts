function listaNomes(nome: string, qntd: number): string[] {
    const nomes: string[] = []

    for (let i = 0; i < qntd; i++)
        nomes.push(nome)
    return nomes
}

type Fun = (texto: string, numero: number) => string[]

const fun1: Fun = (valor1: string, num: number): string[] => {
    const nomes: string[] = []

    for (let i = 0; i < num; i++)
        nomes.push(valor1)
    return nomes
}

const lista = fun1("Rigel", 5)
console.log(lista)