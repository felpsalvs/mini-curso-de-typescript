//boolean (true or false)
let isDone: boolean
isDone = false

// string ('foo' or "foo")
let nam: string
nam = 'foo'

// number (int or float, hex, binary)
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