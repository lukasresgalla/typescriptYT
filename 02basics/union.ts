let score: number|string
score = 10
score = '10'

type usuario = {
    id: string
    password: string
}

type admin = {
    nome: string
    password: string
}

type Pessoa = usuario | admin

let pessoa: Pessoa = {id: '1', password: '123'}

pessoa = { nome: 'Joaquim', password: '123'} 

console.log(pessoa) 

//em arrays
let array: (string|number)[] = ['1', 2, '3', 4]
console.log(array)

//pode fazer a união com dados
let choradev: 'lukas' | 'joaquim' 
choradev = 'lukas'
console.log(choradev)