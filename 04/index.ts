export {}

function convertToArray(input: number): number[] {
    return [input]
}

convertToArray(1)


//function convertToArray2<T>(input: T): T[] {
//    return [input]
//}
//
//convertToArray2(2)

const covertToArray2 = <T>(n: T): T[] =>[n]

let n = covertToArray2(2)


