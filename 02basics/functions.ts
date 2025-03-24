export {}

function add2(a: number): number {
    return a + 2
}

add2(3)
console.log(add2(3)) 

function getUpperCase(str: string): string {
    return str.toUpperCase()
}

console.log(getUpperCase('hello'))

function signUp(name: string, email: string, password: number, isPaid: boolean) {}
signUp('name', 'email', 123, true)

// problema!
function soma(num: number){
    return 'hello'
}

function somaCerta(num: number): number{
    return 1
}

// em arrow function
const darOi = (a: string): string => {
    return a
}

// void
function consoleError(errormsg: string): void {
    console.log(errormsg)
}

// never
function handleError(errormsg: string): never {
    throw new Error(errormsg)
}
