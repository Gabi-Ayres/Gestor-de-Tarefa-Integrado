import { ITask } from './ITask.js';
import { TaskStatus } from './TaskStatus.js';
import { Categoria } from './Categoria.js';
import { BaseEntity } from '../models/BaseEntity.js';

// Aula 4 - Exercício 6 e 7: FeatureTask com REGRAS FLEXÍVEIS
export class FeatureTask extends BaseEntity implements ITask {
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

    // Aula 4 - Ex. 7: Polimorfismo - comportamento específico de Feature
    getType(): string {
        return "feature";
    }

    // Aula 4 - Ex. 6: Regras próprias de transição (FLEXÍVEIS para features)
    moveTo(status: TaskStatus): void {
        // Features podem pular etapas - mais flexível
        console.log(`✨ [FEATURE] Mudando estado: ${this.status} → ${status}`);
        this.status = status;
        
        if (status === TaskStatus.COMPLETED) {
            this.marcarComoConcluida();
        }
    }

    marcarComoConcluida(): void {
        // Features podem ser concluídas de qualquer estado
        this.completed = true;
        this.dataConclusao = new Date();
        this.status = TaskStatus.COMPLETED;
        console.log(`✅ [FEATURE] Concluída com sucesso!`);
    }
}
