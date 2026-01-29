// Aula 4 - Exercício 1: Classe base comum
export class BaseEntity {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
    }
    getId() {
        return this.id;
    }
    getCreatedAt() {
        return this.createdAt;
    }
}
