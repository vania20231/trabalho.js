const Cliente = {
    nome: "Arisberto",
    idade:26,
    email: "JP@tech.com",
    telefone:["41 98888-2222", "41 97777-3333"]
}

console.log(Cliente)

Cliente.endereco = [{
    rua: 'Sete de setembro',
    numero: 954,
    apartamento: true,
    complemento: "ap 25"
},
]

console.log(Cliente)

Cliente.endereco.push(
    {
        rua: '24 de maio',
        numero: 728,
        apartamento: false,
    }
)

console.log(Cliente)
