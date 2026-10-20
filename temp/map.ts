function map<T, K>(lista: T[], fun: (valor: T, index: number, lista: T[]) => K): K[] {
    const novaLista = []
    for (let i = 0; i < lista.length; i++)
        novaLista.push(fun(lista[i], i, lista))
    return novaLista
}

const lista1: number[] = []
for (let i = 1; i <= 100; i++) 
    lista1.push(i)

const lista2 = map(lista1, (v) => {
    if (v % 5 === 0)
        return `${(v + 5) * 3}`
    return `${v * 10}`
})

console.log(lista2)