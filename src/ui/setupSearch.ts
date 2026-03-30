import { getAllUtilizadores } from '../services/userService.js';
import { getAllTarefas, searchByTitle } from '../services/taskService.js';
import {searchUserByName} from '../services/userService.js';
import { renderUtilizadores, atualizarContador } from './renderUser.js';
import { renderizarLista } from './renderTask.js';

// Configurar pesquisa de utilizadores
export async function setupUserSearch(): Promise <void> {
    const userSearch = document.getElementById("user-search") as HTMLInputElement;
    if (!userSearch) return;

    userSearch.addEventListener("input", async () => {
        const termo = userSearch.value.trim().toLowerCase();
        const nomeFiltrados = await searchUserByName(termo);
    });
}

// Configurar pesquisa de tarefas
export async function setupTaskSearch(): Promise <void> {

    const taskSearch = document.getElementById("task-search") as HTMLInputElement;
    if (!taskSearch) return;

    taskSearch.addEventListener("input", async () => {
        const termo = taskSearch.value.toLowerCase();
        const tarefasFiltradas = await searchByTitle(termo)});
    }
