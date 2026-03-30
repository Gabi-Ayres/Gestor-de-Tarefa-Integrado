var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUtilizadoresAtivos, getAllUtilizadores } from '../services/userService.js';
import { getTarefasPendentes, getAllTarefas } from '../services/taskService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista, atualizarContadorTarefas } from './renderTask.js';
// Configurar filtros de utilizadores
export function setupUserFilters() {
    const filtrarAtivosBtn = document.getElementById("filter-active-users");
    const mostrarTodosBtn = document.getElementById("filter-all-users");
    if (filtrarAtivosBtn) {
        filtrarAtivosBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const utilizadoresAtivos = yield getUtilizadoresAtivos();
            renderUtilizadores(utilizadoresAtivos);
            atualizarContador();
        }));
    }
    if (mostrarTodosBtn) {
        mostrarTodosBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            renderUtilizadores(yield getAllUtilizadores());
            atualizarContador();
        }));
    }
}
// Configurar filtros de tarefas
export function setupTaskFilters() {
    const filtrarPendentesBtn = document.getElementById("filter-pending-tasks");
    const mostrarTodasBtn = document.getElementById("filter-all-tasks");
    if (filtrarPendentesBtn) {
        filtrarPendentesBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const tarefasPendentes = yield getTarefasPendentes();
            renderizarLista(tarefasPendentes);
            atualizarContadorTarefas();
        }));
    }
    if (mostrarTodasBtn) {
        mostrarTodasBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            renderizarLista(yield getAllTarefas());
            atualizarContadorTarefas();
        }));
    }
}
