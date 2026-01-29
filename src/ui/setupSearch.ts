import { getAllUtilizadores } from '../services/userService.js';
import { getAllTarefas } from '../services/taskService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista } from './renderTask.js';

// Configurar pesquisa de utilizadores
export function setupUserSearch(): void {
    const userSearch = document.getElementById("user-search") as HTMLInputElement;
    if (!userSearch) return;

    userSearch.addEventListener("input", () => {
        const termo = userSearch.value.trim().toLowerCase();
        const nomeFiltrados = getAllUtilizadores().filter(u =>
            u.nome.toLowerCase().includes(termo)
        );
        renderUtilizadores(nomeFiltrados);
        atualizarContador();
    });
}

// Configurar pesquisa de tarefas
export function setupTaskSearch(): void {
    const taskSearch = document.getElementById("task-search") as HTMLInputElement;
    if (!taskSearch) return;

    taskSearch.addEventListener("input", () => {
        const termo = taskSearch.value.toLowerCase();
        const tarefasFiltradas = getAllTarefas().filter(t =>
            t.title.toLowerCase().includes(termo)
        );
        renderizarLista(tarefasFiltradas);
    });
}
