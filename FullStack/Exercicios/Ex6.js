/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.*/



function jurosSimples(capital, taxa, tempo){
    let novaTaxa = taxa / 100
    let valor = capital + (capital * novaTaxa * tempo)
    console.log(valor)
}

jurosSimples(1000, 10, 3)


function jurosCompostos(capital, taxa, tempo){
    let novaTaxa = 1 + (taxa / 100)
    let valor = capital * (novaTaxa) ** tempo

    console.log(valor)
}

jurosCompostos(1000, 10, 3)