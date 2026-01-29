import { BaseEntity } from './BaseEntity.js';
import { IUser } from './IUser.js';

// Aula 3 - Exercício 1 + Aula 4 - Exercícios 2 e 3
export class UtilizadorClass extends BaseEntity implements IUser {
    private _nome: string;
    private _email: string;
    private _ativo: boolean;

    constructor(id: number, nome: string, email: string, ativo: boolean = true) {
        super(id); // Aula 4 - Ex. 2: Herança
        this._nome = nome;
        this._email = email;
        this._ativo = ativo;
    }

    // Getters públicos (Aula 4 - Ex. 3: Encapsulamento)
    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email;
    }

    get ativo(): boolean {
        return this._ativo;
    }

    set nome(value: string) {
        this._nome = value;
    }

    set email(value: string) {
        if (!value.includes("@")) {
            throw new Error('Email inválido');
        }
        this._email = value;
    }

    desativar(): void {
        this._ativo = false;
    }

    ativar(): void {
        this._ativo = true;
    }

    toggleEstado(): void {
        this._ativo = !this._ativo;
    }

    isActive(): boolean {
        return this._ativo;
    }
}
