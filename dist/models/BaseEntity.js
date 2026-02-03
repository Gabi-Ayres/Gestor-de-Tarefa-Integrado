// Aula 4 - Exercício 1: Classe base comum
export class BaseEntity {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        BaseEntity.totalEntities += 1;
    }
    getId() {
        return this.id;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    static getTotalEntities() {
        return BaseEntity.getTotalEntities();
    }
}
BaseEntity.totalEntities = 0;
