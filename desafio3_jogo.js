
class heroi{
    constructor(personagem, nome, idade, ataque){

        this.personagem = personagem
        this.nome = nome
        this.idade = idade
        this.ataque = ataque        

    }
    tostring()    {
        console.log(`O ${this.personagem} de nome ${this.nome} com idade de ${this.idade} atacou usando ${this.ataque}.`)
    }
    
}

let heroiMago = new heroi("Mago", "Keth", "25", "Magia")
let heroiGuerreiro = new heroi("Guerreiro", "Jhon", "34", "Espada")
let heroiMonge = new heroi("Monge", "Harry", "20", "Artes Macias")
let heroiNinja = new heroi("Ninja", "Liu-Kang", "32", "Shuriken")

heroiMago.tostring()
heroiGuerreiro.tostring()
heroiMonge.tostring()
heroiNinja.tostring()