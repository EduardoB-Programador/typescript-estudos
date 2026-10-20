export default class Usuario {
    readonly id: number
    email: string
    senha: string
    possuiCNPJ: boolean 
    amigos: Usuario[] = []
    //
    constructor(id: number, email: string, senha: string, possuiCNPJ: boolean) {
        this.id = id
        this.email = email
        this.senha = senha
        this.possuiCNPJ = possuiCNPJ
    }

    mostrar() {
        console.log(this)
    }

    logar(email: string, senha: string) {
        return this.email === email && this.senha === senha
    }

    adicionarAmigo(user:Usuario) {
        this.amigos.push(user)
        user.amigos.push(this)
    }
}

// const obj = {
//     id: 10,
//     email: "example@example.com",
//     senha: "123"
// }



