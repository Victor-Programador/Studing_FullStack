/**Desenvolva uma função que recebe um objeto como parametro e retorne um outro objeto que corresponde ao objeto recebido como parametro, 
 * porem com as posições das chaves e valores invertidas, conforme exemplo a seguir:
 * 
 * Exemplo: 
 * 
 * inverter({a: 1, b: 2, c: 3}) // retornara {1: "a", 2: "b", 3: "c"}
 */

function inverter(objetos){

    let obj = {}
    Object.entries(objetos).forEach(([chave, valor])=>{
        obj[valor] = chave
    })

    return obj
}


console.log(inverter({a: 1, b: 2, c: 3}))