// type aliases com interserção (criar um tipo com nome com interseção)

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
    nickname: string
    level: number
}

const char: CharInfo = {
    nickname: 'johnmaster',
    level: 100
}

// interseção
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: 'Joao',
    nickname: 'johnmaster',
    level: 100
}
