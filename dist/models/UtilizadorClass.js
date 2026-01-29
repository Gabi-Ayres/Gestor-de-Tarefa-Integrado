import { BaseEntity } from './BaseEntity.js';
// Aula 3 - Exercício 1 + Aula 4 - Exercícios 2 e 3
export class UtilizadorClass extends BaseEntity {
    constructor(id, nome, email, ativo = true) {
        super(id); // Aula 4 - Ex. 2: Herança
        this._nome = nome;
        this._email = email;
        this._ativo = ativo;
    }
    // Getters públicos (Aula 4 - Ex. 3: Encapsulamento)
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    get ativo() {
        return this._ativo;
    }
    set nome(value) {
        this._nome = value;
    }
    set email(value) {
        if (!value.includes("@")) {
            throw new Error('Email inválido');
        }
        this._email = value;
    }
    desativar() {
        this._ativo = false;
    }
    ativar() {
        this._ativo = true;
    }
    toggleEstado() {
        this._ativo = !this._ativo;
    }
    isActive() {
        return this._ativo;
    }
}
