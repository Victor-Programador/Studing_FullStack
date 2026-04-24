/**Crie uma função que receba um array de elementos e retorne um array somente com os numeros presentes no array recebido como parametro
 * 
 * Exemplos:
 * 
 * filtrarNumeros(["Javascript", 1, "3", "web", 20]) // retornará [1, 20]
 * filtrarNumeros(["a", "c"]) // retornara []
*/


function filtrarNumeros(array){
    const newArray = []
    array.forEach(element => {
        if(typeof element === "number"){
            newArray.push(element)
        }
    });
    return newArray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["a", "c"]))