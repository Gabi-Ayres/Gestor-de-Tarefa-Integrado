import { TaskStatus } from './TaskStatus.js';
import { Categoria } from './Categoria.js';

// Aula 4 - Exercício 4: Interface de Tarefa
export interface ITask {
    readonly id: number;
    title: string;
    completed: boolean;
    status: TaskStatus;
    categoria: Categoria;
    dataConclusao?: Date;
    assignedTo?: number; // ID do utilizador (para integração)

    getId(): number;
    getType(): string;
    moveTo(status: TaskStatus): void; // Aula 4 - Ex. 6
    marcarComoConcluida(): void;
}
