/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor.  
Exemplo:  
String: “10 20 20 8 25 3 0 30 1” 
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação 
aconteceu no sétimo jogo.) */


function pontuação(pontos){
    let pontucao = pontos.split(" ")
    let pontos2 = []
    for(let i in pontucao){
        pontos2.push(parseInt(pontucao[i]))
    }
    
    let piorPontuacao = pontos2[0]
    let maiorPontuacao = pontos2[0]
    let recorde = 0
    let jogo = 1

    for(let i = 1; i < pontos2.length; i++){
        if(pontos2[i] > maiorPontuacao){
            recorde++
            maiorPontuacao = pontos2[i]
        }
        
        if(pontos2[i] < piorPontuacao){
            piorPontuacao = pontos2[i]
            jogo = i + 1
        }
    }

    return [recorde, jogo]

}

console.log(pontuação("10 20 3 20 50 80 70"))