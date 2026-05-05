// operador ... rest(juntar)/spread(spalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1234.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Fernando']
console.log(grupoFinal)