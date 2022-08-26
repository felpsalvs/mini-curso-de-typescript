// tyoe aliases with intersection (criar um tipo com nome com interseção)

type AccountInfo = {
    id: number
    name: string
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: 'Joao'
}

type CharInfo = {