/*26)
Fazer um programa para encontrar todos os pares entre 1 e 100. */

let inicio = 1
let contPar = 0


while(inicio < 101){
    if(inicio %  2 === 0){
        contPar ++
        console.log(inicio)
    }
    inicio++
}

console.log(contPar)