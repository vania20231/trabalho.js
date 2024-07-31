const Pessoa = {
    nome: "Monica",
    profissao:"Pedagoga"
}

console.log(Pessoa.nome)

console.log(Pessoa.telefone)

Pessoa.telefone = "41 99999-5555"

console.log(Pessoa.telefone)

console.log(Pessoa)

const novaPessoa = {
    nome:"teste"
}

Pessoa = novaPessoa
