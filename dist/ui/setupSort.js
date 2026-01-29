import { getAllUtilizadores } from '../services/userService.js';
import { getAllTarefas } from '../services/taskService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista, atualizarContadorTarefas } from './renderTask.js';
// Configurar ordenação de utilizadores
export function setupUserSort() {
    const ordenarNomeBtn = document.getElementById("sort-users-btn");
    if (!ordenarNomeBtn)
        return;
    ordenarNomeBtn.addEventListener("click", () => {
        const utilizadores = getAllUtilizadores();
        utilizadores.sort((a, b) => a.nome.localeCompare(b.nome));
        renderUtilizadores(utilizadores);
        atualizarContador();
    });
}
// Configurar ordenação de tarefas
export function setupTaskSort() {
    const ordenarBtn = document.querySelector("#sort-tasks-btn");
    if (!ordenarBtn)
        return;
    ordenarBtn.addEventListener("click", () => {
        const tarefas = getAllTarefas();
        tarefas.sort((a, b) => a.title.localeCompare(b.title));
        renderizarLista(tarefas);
        atualizarContadorTarefas();
    });
}
