//exemplo com classe

class Pessoa{
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

// exemplo com função construtora

function People(nome){
    this.nome = nome
    this.falar = () => console.log(`Meu nome é: ${this.nome}`)
}

const p2 = new People('Victor')
p2.falar()