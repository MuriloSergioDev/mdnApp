export interface StudentInterface {
    id : string,
    name?: string,
}

export interface TurmaInterface {
    id : string,
    title?: string,
    start?: string,
    end?: string,
    colorStatus: string,
}

export interface UserInterface {
    name: string
    email: string
    password: string
}