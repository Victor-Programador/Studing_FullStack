const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


// Professor passou um desafio em aula, onde ele queria  que trouxéssemos apanas a funcionaria que fosse mulher e da china, com o menor salario.



// essa é a minha resolução
axios.get(url).then(Response => {
    const funcionarios = Response.data
    const mulherChinesa = funcionarios.filter(p => {
        if(p.genero === 'F' && p.pais === 'China'){
            return p
        }
    })
    let menorSalrio = mulherChinesa[0]
    let resultado = mulherChinesa.filter(p => {
        if(p.salario < menorSalrio.salario){
            menorSalrio = p
        }
    })
    console.log(menorSalrio)
})



// essa é a do professor:
const chineses = p => p.pais === 'China'
const mulheres = p => p.genero === 'F'
const menorSal = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(Response => {
    const funcionario = Response.data
    //console.log(funcionarios)

    const func = funcionario
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSal)
        
    console.log(func)
})