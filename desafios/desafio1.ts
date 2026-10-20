/*
Crie um tipo chamado StringNumber esse tipo deve possibilitar
o valor ser uma string ou um number

Crie 3 variáveis com esse tipo e insira dentro delas os
seguintes valores:
"texto"
"501"
501
*/

type StringNumber = string | number

let a:StringNumber = "texto"
let b:StringNumber = "501"
let c:StringNumber = 501