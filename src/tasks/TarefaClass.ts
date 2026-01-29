import { ITask } from './ITask.js';
import { TaskStatus } from './TaskStatus.js';
import { Categoria } from './Categoria.js';
import { BaseEntity } from '../models/BaseEntity.js';
import { TaskPriority } from './TaskPriority.js';

// Aula 4 - Exercício 6 e 7: TarefaClass (tarefa normal/genérica)
export class TarefaClass extends BaseEntity implements ITask {
    title: string;
    completed: boolean;
    status: TaskStatus;
    categoria: Categoria;
    dataConclusao?: Date;
    assignedTo?: number;
    priority?: TaskPriority;
    

    constructor(id: number, title: string, categoria: Categoria = "Outros", completed: boolean = false, assignedTo?: number,  priority?: TaskPriority) {
        super(id);
        this.title = title;
        this.completed = completed;
        this.categoria = categoria;
        this.status = completed ? TaskStatus.COMPLETED : TaskStatus.CREATED;
        this.assignedTo = assignedTo;
        this.priority = priority;
    }

    // Aula 4 - Ex. 7: Polimorfismo - comportamento genérico
    getType(): string {
        return "task";
    }

    // Aula 4 - Ex. 6: Regras próprias de transição (GENÉRICAS)
    moveTo(status: TaskStatus): void {
        // Tarefas normais têm comportamento padrão
        console.log(`[TASK] Mudando estado: ${this.status} → ${status}`);
        this.status = status;
        
        if (status === TaskStatus.COMPLETED) {
            this.marcarComoConcluida();
        }
    }

    // SEU método original mantido!
    marcarComoConcluida(): void {
        this.completed = true;
        this.dataConclusao = new Date();
        this.status = TaskStatus.COMPLETED;
        console.log(`[TASK] Concluída!`);
    }
}

