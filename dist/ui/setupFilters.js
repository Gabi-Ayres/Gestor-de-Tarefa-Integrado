import { getUtilizadoresAtivos, getAllUtilizadores } from '../services/userService.js';
import { getTarefasPendentes, getAllTarefas } from '../services/taskService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista, atualizarContadorTarefas } from './renderTask.js';
// Configurar filtros de utilizadores
export function setupUserFilters() {
    const filtrarAtivosBtn = document.getElementById("filter-active-users");
    const mostrarTodosBtn = document.getElementById("filter-all-users");
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
export function setupTaskFilters() {
    const filtrarPendentesBtn = document.getElementById("filter-pending-tasks");
    const mostrarTodasBtn = document.getElementById("filter-all-tasks");
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
