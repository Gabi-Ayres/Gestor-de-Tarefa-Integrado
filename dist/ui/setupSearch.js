var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { searchByTitle } from '../services/taskService.js';
import { searchUserByName } from '../services/userService.js';
// Configurar pesquisa de utilizadores
export function setupUserSearch() {
    return __awaiter(this, void 0, void 0, function* () {
        const userSearch = document.getElementById("user-search");
        if (!userSearch)
            return;
        userSearch.addEventListener("input", () => __awaiter(this, void 0, void 0, function* () {
            const termo = userSearch.value.trim().toLowerCase();
            const nomeFiltrados = yield searchUserByName(termo);
        }));
    });
}
// Configurar pesquisa de tarefas
export function setupTaskSearch() {
    return __awaiter(this, void 0, void 0, function* () {
        const taskSearch = document.getElementById("task-search");
        if (!taskSearch)
            return;
        taskSearch.addEventListener("input", () => __awaiter(this, void 0, void 0, function* () {
            const termo = taskSearch.value.toLowerCase();
            const tarefasFiltradas = yield searchByTitle(termo);
        }));
    });
}
