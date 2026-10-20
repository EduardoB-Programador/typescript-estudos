class ToTextParser {
    constructor() {

    }

    toText() {
        return "(" + Object.entries(this).map(v => {
            return `${v[0]}:${v[1]}`
        }).join(",") + ")"
    }

    static toCSV<T extends Record<string, any>>(...args: T[]) {
        const columnNames = Object.keys(args[0]).join(",")
        const values = args.map(v => {
            return Object.values(v).join(",")
        }).join("\n")
        return columnNames + "\n" + values
    }

    toCSV() {
        return ToTextParser.toCSV(this)
    }
}

class User extends ToTextParser {
    constructor(
        private id: number,
        private nome: string,
        private email: string,
        private senha: string
    ) {
        super()
    }
}

const texto = "Eduardo Braga Ferreira da Silva"
const final = texto.split("").map(v => {
    if ("aeiou".includes(v.toLowerCase())) {
        return v.toUpperCase()
    } else {
        return v.toLowerCase()
    }
}).join("")

console.log(final)

const u1 = new User(0, "Hugo", "hugo@example.com", "123")
const u2 = new User(1, "Jonathan", "jonathan@example.com", "123")

console.log(u1.toText())
console.log(u2.toText())

console.log(u1.toCSV())
console.log(u2.toCSV())

console.log(ToTextParser.toCSV(u1, u2))