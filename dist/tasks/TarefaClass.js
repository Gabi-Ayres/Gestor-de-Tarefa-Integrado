import { TaskStatus } from './TaskStatus.js';
import { BaseEntity } from '../models/BaseEntity.js';
// Aula 4 - Exercício 6 e 7: TarefaClass (tarefa normal/genérica)
export class TarefaClass extends BaseEntity {
    constructor(id, title, categoria = "Outros", completed = false, assignedTo, priority) {
        super(id);
        this.title = title;
        this.completed = completed;
        this.categoria = categoria;
        this.status = completed ? TaskStatus.COMPLETED : TaskStatus.CREATED;
        this.assignedTo = assignedTo;
        this.priority = priority;
    }
    // Aula 4 - Ex. 7: Polimorfismo - comportamento genérico
    getType() {
        return "task";
    }
    // Aula 4 - Ex. 6: Regras próprias de transição (GENÉRICAS)
    moveTo(status) {
        // Tarefas normais têm comportamento padrão
        console.log(`[TASK] Mudando estado: ${this.status} → ${status}`);
        this.status = status;
        if (status === TaskStatus.COMPLETED) {
            this.marcarComoConcluida();
        }
    }
    // SEU método original mantido!
    marcarComoConcluida() {
        this.completed = true;
        this.dataConclusao = new Date();
        this.status = TaskStatus.COMPLETED;
        console.log(`[TASK] Concluída!`);
    }
}
