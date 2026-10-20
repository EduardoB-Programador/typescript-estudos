/*
(sem tipo)
Crie uma função chamada print, ela deve receber 2 parâmetros:

texto - string
qntd - number

Ela deve mostrar no terminal o parâmetro texto a quantidade de vezes do
parâmetro qntd

Use a função com os seguinte valores:
"Shaula" e 10
"Betelgeuse" e 3
*/

function print(texto:string, qntd:number) {
    for (let i = 0; i < qntd; i++)
        console.log(texto)
}

print("Shaula", 10)
print("Betelgeuse", 3)