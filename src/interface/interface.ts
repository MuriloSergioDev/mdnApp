export interface StudentInterface {
    id: string,
    name?: string,
}

export interface TurmaInterface {
    id ?: string,
    title?: string,
    start?: string,
    end?: string,
    status ?: boolean,
}

export interface UserInterface {
    uid ?: string
    name ?: string
    email ?: string
    password ?: string
    turma ?: string
    permission ?: number
}

export type RootStackParamList = {
    Login: {
        name: string
        email: string
        password: string
        turma: string
        permission: number
    };
    Menu: {
        name: string
        email: string
        password: string
        turma: string
        permission: number
    };
};