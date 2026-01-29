// Aula 4 - Exercício 1: Classe base comum
export class BaseEntity {
    public readonly id: number;
    protected createdAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
    }

    getId(): number {
        return this.id;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }
}
