var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadTasks } from '../services/taskService.js';
import { loadUsers } from './userService.js';
import { loadTags } from './tagService.js';
// Inicializar dados do sistema
export function initializeData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadUsers();
        yield loadTasks();
        yield loadTags();
        // Utilizadores
        //iniciarUtilizadores();
        // Tarefas com polimorfismo
        // const task1 = new TarefaClass(1, "Estudar TypeScript", "Outros");
        // addTarefa(task1);
        // const task2 = new FeatureTask(2, "Implementar sistema de login", "Trabalho");
        // addTarefa(task2);
        // const task3 = new BugTask(3, "Corrigir erro de validação", "Trabalho");
        // addTarefa(task3);
    });
}
