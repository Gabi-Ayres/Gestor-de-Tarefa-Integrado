import { ITask } from './ITask.js';
import { TaskStatus } from './TaskStatus.js';
import { Categoria } from './Categoria.js';
import { BaseEntity } from '../models/BaseEntity.js';

// Aula 4 - Exercício 6 e 7: BugTask com REGRAS RÍGIDAS
export class BugTask extends BaseEntity implements ITask {
    title: string;
    completed: boolean;
    status: TaskStatus;
    categoria: Categoria;
    dataConclusao?: Date;
    assignedTo?: number;

    constructor(id: number, title: string, categoria: Categoria = "Outros", assignedTo?: number) {
        super(id);
        this.title = title;
        this.completed = false;
        this.status = TaskStatus.CREATED;
        this.categoria = categoria;
        this.assignedTo = assignedTo;
    }

    // Aula 4 - Ex. 7: Polimorfismo - comportamento específico de Bug
    getType(): string {
        return "bug";
    }

    // Aula 4 - Ex. 6: Regras próprias de transição (RÍGIDAS para bugs)
    moveTo(status: TaskStatus): void {
        const validTransitions: { [key: string]: TaskStatus[] } = {
            [TaskStatus.CREATED]: [TaskStatus.ASSIGNED],
            [TaskStatus.ASSIGNED]: [TaskStatus.IN_PROGRESS, TaskStatus.BLOCKED],
            [TaskStatus.IN_PROGRESS]: [TaskStatus.BLOCKED, TaskStatus.COMPLETED],
            [TaskStatus.BLOCKED]: [TaskStatus.IN_PROGRESS],
            [TaskStatus.COMPLETED]: [TaskStatus.ARCHIVED],
            [TaskStatus.ARCHIVED]: []
        };

        const allowedStatuses = validTransitions[this.status];
        if (!allowedStatuses || allowedStatuses.indexOf(status) === -1) {
            console.warn(`[BUG] Transição inválida: ${this.status} → ${status}`);
            console.warn(` Bugs devem seguir o workflow rigoroso!`);
            return; // Bloqueia transição inválida
        }

        console.log(`[BUG] Transição permitida: ${this.status} → ${status}`);
        this.status = status;
        
        if (status === TaskStatus.COMPLETED) {
            this.marcarComoConcluida();
        }
    }

    marcarComoConcluida(): void {
        // Bugs só podem ser concluídos se passaram pelo workflow
        if (this.status !== TaskStatus.IN_PROGRESS && this.status !== TaskStatus.COMPLETED) {
            console.warn(`[BUG] Não pode concluir direto! Estado atual: ${this.status}`);
            console.warn(`Bugs devem estar em IN_PROGRESS para serem concluídos.`);
            return;
        }
        
        this.completed = true;
        this.dataConclusao = new Date();
        this.status = TaskStatus.COMPLETED;
        console.log(`[BUG] Concluído com sucesso!`);
    }
}
