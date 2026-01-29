import { getUtilizadoresAtivos, getAllUtilizadores } from '../services/userService.js';
import { getTarefasPendentes, getAllTarefas } from '../services/taskService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista, atualizarContadorTarefas } from './renderTask.js';

// Configurar filtros de utilizadores
export function setupUserFilters(): void {
    const filtrarAtivosBtn = document.getElementById("filter-active-users") as HTMLButtonElement;
    const mostrarTodosBtn = document.getElementById("filter-all-users") as HTMLButtonElement;

    if (filtrarAtivosBtn) {
        filtrarAtivosBtn.addEventListener("click", () => {
            const utilizadoresAtivos = getUtilizadoresAtivos();
            renderUtilizadores(utilizadoresAtivos);
            atualizarContador();
        });
    }

    if (mostrarTodosBtn) {
        mostrarTodosBtn.addEventListener("click", () => {
            renderUtilizadores(getAllUtilizadores());
            atualizarContador();
        });
    }
}

// Configurar filtros de tarefas
export function setupTaskFilters(): void {
    const filtrarPendentesBtn = document.getElementById("filter-pending-tasks") as HTMLButtonElement;
    const mostrarTodasBtn = document.getElementById("filter-all-tasks") as HTMLButtonElement;

    if (filtrarPendentesBtn) {
        filtrarPendentesBtn.addEventListener("click", () => {
            const tarefasPendentes = getTarefasPendentes();
            renderizarLista(tarefasPendentes);
            atualizarContadorTarefas();
        });
    }

    if (mostrarTodasBtn) {
        mostrarTodasBtn.addEventListener("click", () => {
            renderizarLista(getAllTarefas());
            atualizarContadorTarefas();
        });
    }
}
