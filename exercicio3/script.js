const pokemon1 = [
    {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

]

const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água',
    
}
const ataques = [{nome: 'Investida', dano: 40, tipo: 'Normal', precisao: 100}]
pokemon1.push(ataques)
console.log(pokemon1, pokemon2)

pokemon1.ataques2 = [{nome:'Folha Navalha', dano:45, precisao:100 ,tipo:'grama'}]
pokemon2.ataques3 = [{nome: 'Jato da Água', dano:40, precisao:100 ,tipo: 'Água'}]
console.log(pokemon1, pokemon2)
