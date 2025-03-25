export {}

//objetos

const Usuario = {
    nome: 'Lukas',
    idade: 20,
    email: 'lukas.resgalla@bridge.ufsc.br',
    estaAtivo: true
}

//type alias   
//para estruturas de objetos
type Pessoa = {
    nome: string,
    idade: number, 
}

// para tipos
type valor = string|number|boolean

const n: valor = 'hasd'


