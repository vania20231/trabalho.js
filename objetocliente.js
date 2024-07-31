const objetoCliente = {
    id: 5,
    nome: "Arisberto",
    idade:26,
    cpf:"999.888.777-66"
}

console.log(`Nome: ${objetoCliente['nome']}`)
console.log(`Idade: ${objetoCliente['idade']}`)
console.log(`CPF: ${objetoCliente['cpf']}`)

const chaves = ["nome", "idade", "cpf"]

chaves.forEach((chave) => {
    console.log(`chave: ${chave} valor: ${objetoCliente[chave]}`)
});
