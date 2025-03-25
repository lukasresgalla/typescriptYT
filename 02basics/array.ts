export{}

// declarar e tipar array
let herois: number[] 
herois = [1,2,3,4]
// ou
let herois2: Array<number>
herois2 = [1,2,3,4]


// delcarar e tipar array de strings
let herois3: string[]
herois3 = ['batman', 'superman', 'mulher maravilha']
// ou
let herois4: Array<string>
herois4 = ['batman', 'superman', 'mulher maravilha']


// declarar usando uma interface generica de array de numeros
let array2: Array<number> = [1,2,3,4]

// detalhe, quando um array é declarado dessa forma, não inicializado, vira never, diferente de outros que iniciam com undefined
let x: number[]