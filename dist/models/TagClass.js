import { BaseEntity } from './BaseEntity.js';
// Aula 3 - Exercício 1 + Aula 4 - Exercícios 2 e 3
export class TagClass extends BaseEntity {
    constructor(id, nome) {
        super(id);
        this._nome = nome;
    }
    // Getters públicos (Aula 4 - Ex. 3: Encapsulamento)
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
}
