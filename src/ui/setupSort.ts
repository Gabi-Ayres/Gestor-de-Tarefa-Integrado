import { getAllUtilizadores, sortUserByTitle } from '../services/userService.js';
import { getAllTarefas, sortTasksByTitle } from '../services/taskService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista, atualizarContadorTarefas } from './renderTask.js';



// Configurar ordenação de utilizadores
export function setupUserSort(): void {
    const ordenarNomeBtn = document.getElementById("sort-users-btn") as HTMLButtonElement;
    if (!ordenarNomeBtn) return;

    ordenarNomeBtn.addEventListener("click", async () => {
         await sortUserByTitle();
        atualizarContador();
    });
}

// Configurar ordenação de tarefas
export function setupTaskSort(): void {
    const ordenarBtn = document.querySelector("#sort-tasks-btn") as HTMLButtonElement;
    if (!ordenarBtn) return;

    ordenarBtn.addEventListener("click", async () => {
         await sortTasksByTitle();
        atualizarContadorTarefas();
    });
}
