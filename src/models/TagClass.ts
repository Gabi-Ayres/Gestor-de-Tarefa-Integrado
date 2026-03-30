import { BaseEntity } from './BaseEntity.js';
import { ITag } from './ITag.js';

// Aula 3 - Exercício 1 + Aula 4 - Exercícios 2 e 3
export class TagClass extends BaseEntity implements ITag {
    private _nome: string;

    constructor(id: number, nome: string) {
        super(id);
        this._nome = nome;
    }

    // Getters públicos (Aula 4 - Ex. 3: Encapsulamento)
    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }
}
