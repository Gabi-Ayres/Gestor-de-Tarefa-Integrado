import { TarefaClass, BugTask, FeatureTask } from '../tasks/index.js';
import { addTarefa } from '../services/taskService.js';
import { iniciarUtilizadores } from '../services/userService.js';

// Inicializar dados do sistema
export function initializeData(): void {
  
    // Utilizadores
    iniciarUtilizadores();
    
    // Tarefas com polimorfismo
    const task1 = new TarefaClass(1, "Estudar TypeScript", "Outros");
    addTarefa(task1);
    
    const task2 = new FeatureTask(2, "Implementar sistema de login", "Trabalho");
    addTarefa(task2);
    
    const task3 = new BugTask(3, "Corrigir erro de validação", "Trabalho");
    addTarefa(task3);
    }
