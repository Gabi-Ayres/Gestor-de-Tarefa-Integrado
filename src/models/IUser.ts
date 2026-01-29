// Aula 3 - Exercício 1: Interface Utilizador
export interface IUser {
    readonly id: number;
    nome: string;
    email: string;
    ativo: boolean;
    
    getId(): number;
}
