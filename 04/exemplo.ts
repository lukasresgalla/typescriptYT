//função

function nomeDaFuncao(parametro) {
    return parametro
}

function somar(a, b) {
    return a + b
}

//arrow function
const somar2 = (a, b) => {
    return a + b
}


//numero
let numero: number

let numero2 = 3

//string
let nome: string
let nome2 = "Chora-dev"

//boolean
let ativo: boolean
let ativo2 = true

//undefined
let indefinido: undefined
let indefinido2 = undefined

//null
let nulo: null
let nulo2 = null

//void
let semRetorno: void

function semRetornoFuncao(): void {
    console.log('sem retorno')
}

//array
let arrayNumeros: number[]
let arrayNumeros2: Array<number>
let arrayNumeros3 = [1, 2, 3]

//tupla
let tupla: [number, string]
let tupla2: [number, string, boolean]


// Objeto
let objeto: object
let objeto2: { 
    nome: string, 
    idade: number 
}

let objeto3: { 
    nome: string, 
    idade: number, 
    profissao?: string // ? significa que é opcional
}


// Enum
enum assento {
    JANELA,
    MEIO,
    CORREDOR
}

const meuAssento: assento = assento.MEIO;
console.log(meuAssento)

enum diaDaSemana {
    SEGUNDA = 'segunda',
    TERCA = 'terça',
    QUARTA = 'quarta',
    QUINTA = 'quinta',
    SEXTA = 'sexta',
    SABADO = 'sábado',
    DOMINGO = 'domingo'
}

const hojeEh = diaDaSemana.SEXTA
console.log(hojeEh)

//unknown
let desconhecido: unknown
desconhecido = 3

