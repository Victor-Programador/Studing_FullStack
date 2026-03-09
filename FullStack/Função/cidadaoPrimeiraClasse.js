// criar uma função de forma literal

function fun1(){

}

// Armazenar em uma variavel

const fun2 = function(){

}

// Armazenar uma função dentro de um array

const array = [function(a, b){ return a + b}, fun1, fun2]

console.log(array[0](2, 3))


//Armazenar em um atributo de um Objeto
const Obj = {}
Obj.falar = function() { return 'Opa'}
console.log(Obj.falar())


// Passr função como parametro

function run(fun){
    fun()
}

run(function() { console.log('Executando....') })

// uma função pode conter/retornar uma função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(1)