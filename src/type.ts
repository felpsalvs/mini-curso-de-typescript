//boolean (true or false) ex: função que retorna true ou false
let isDone: boolean
isDone = false

// string ('foo' or "foo")
let nam: string
nam = 'foo'

// number (int or float, hex, binary) ex: 0xf00d, 0b1010, 0o744
let num: number
num = 1

// array (type[])
let list: number[]
list = [1, 2, 3]

let list2: Array<number>
list2 = [1, 2, 3]

// tuple
let x: [string, number]
x = ['foo', 1]

// enum
enum Color {
    white = '#fff',
    black = '#000',
    red = '#f00',
    green = '#0f0',
    blue = '#00f'
}

// any (qualquer coisa) NÃO É RECOMENDADO
let notSure: any
notSure = 1

// void (vazio) ex: função que não retorna nada
function warnUser(): void {
    console.log('This is my warning message')
}

// null e undefined ex (null e undefined são subtipos de todos os outros tipos)
type Bla = string | null | undefined

// never (nunca) ex: função que lança exceção ou nunca retorna
function error(message: string): never {
    throw new Error(message)
}

// object (qualquer coisa que não seja number, string, boolean, bigint, symbol, null ou undefined)
let cart: object;
cart = {
    key: 'fi'
}

// Type Inference typescript infere o tipo da variável
let message = 'mensagem definida'
message = 'string nova'

