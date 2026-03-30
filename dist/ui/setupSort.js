var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sortUserByTitle } from '../services/userService.js';
import { sortTasksByTitle } from '../services/taskService.js';
import { atualizarContador } from './renderUser.js';
import { atualizarContadorTarefas } from './renderTask.js';
// Configurar ordenação de utilizadores
export function setupUserSort() {
    const ordenarNomeBtn = document.getElementById("sort-users-btn");
    if (!ordenarNomeBtn)
        return;
    ordenarNomeBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        yield sortUserByTitle();
        atualizarContador();
    }));
}
// Configurar ordenação de tarefas
export function setupTaskSort() {
    const ordenarBtn = document.querySelector("#sort-tasks-btn");
    if (!ordenarBtn)
        return;
    ordenarBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        yield sortTasksByTitle();
        atualizarContadorTarefas();
    }));
}
