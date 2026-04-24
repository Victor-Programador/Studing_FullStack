/**Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarao num array, conforme exemplo abaixo. 
 * voce deverá calcular a media da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 * 
 * Exemplo:
 * 
  receberMelhorEstudante({
   Joao: [8, 7.6, 8.9, 6],
   Mariana: [9, 6.6, 7.9, 8],
   Carla: [7, 7, 8, 9]
  }) // retornara {nome: "Mariana", media: 7.875}
 */


function receberMelhorEstudante(estudantes){
    let melhorAluno = " "
    let melhorMedia = -Infinity

    Object.entries(estudantes).forEach(([chave, valor]) => {
        if(valor.reduce((acc, valors) => acc + valors, 0) / valor.length > melhorMedia){
            melhorMedia = valor.reduce((acc, valors) => acc + valors, 0) / valor.length
            melhorAluno = chave
        }
    })

    return {nome: melhorAluno, media: melhorMedia}

}

console.log(receberMelhorEstudante({
   Joao: [8, 7.6, 8.9, 6],
   Mariana: [9, 6.6, 7.9, 8],
   Carla: [7, 7, 8, 9]
  }))