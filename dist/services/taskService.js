var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TarefaClass } from '../tasks/index.js';
import { processTask } from '../tasks/taskUtils.js';
import { getTasks, createTask, deleteTask, updateTask, getTaskStats, sortTasks, searchTasks } from '../api/apiTaskService.js';
import { renderizarLista } from '../ui/renderTask.js';
//Feito toda as assincronizações das funções Tasks 
let listaTarefa = [];
let ordenacao = true;
// Função para ter no cache do frontend.
export function loadTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("load tasks");
        const tasksApi = yield getTasks();
        listaTarefa = tasksApi.map(tApi => new TarefaClass(tApi.id, tApi.title, undefined, tApi.completed, tApi.user_id, undefined));
        renderizarLista(listaTarefa);
    });
}
// função para obter todas as tarefas
export function getAllTarefas() {
    console.log("ver tasks");
    return listaTarefa;
}
// Função para pesquisar tarefas por título (integração)
export function searchByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchApi = yield searchTasks(title);
        listaTarefa = searchApi.map(tApi => new TarefaClass(tApi.id, tApi.title, undefined, tApi.completed, tApi.user_id, undefined));
        renderizarLista(listaTarefa);
    });
}
// Função para ordenar a tarefa  (integração)
export function sortTasksByTitle() {
    return __awaiter(this, void 0, void 0, function* () {
        const sort = ordenacao ? 'asc' : 'desc';
        const sortApi = yield sortTasks(sort);
        listaTarefa = sortApi.map(tApi => new TarefaClass(tApi.id, tApi.title, undefined, tApi.completed, tApi.user_id, undefined));
        ordenacao = !ordenacao;
        renderizarLista(listaTarefa);
    });
}
// Função para obter as estatísticas das tarefas
export function getTarefasCount() {
    return __awaiter(this, void 0, void 0, function* () {
        const status = yield getTaskStats();
        return { total: status.total, concluidas: status.concluida, pendentes: status.pendentes };
    });
}
// Função para criar uma tarefa
export function addTarefa(tarefa) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const userId = (_a = tarefa.assignedTo) !== null && _a !== void 0 ? _a : 1;
        yield createTask(tarefa.title, tarefa.categoria, userId);
        processTask(tarefa, tarefa.assignedTo); // Polimorfismo em ação!
        yield loadTasks();
    });
}
// Função para editar o título da tarefa
export function editarTarefa(id, novoTitulo) {
    return __awaiter(this, void 0, void 0, function* () {
        yield updateTask(id, { title: novoTitulo });
        yield loadTasks();
    });
}
// Função para atribuir tarefa a utilizador (integração)
export function atribuirTarefaAUtilizador(tarefaId, utilizadorId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield updateTask(tarefaId, { user_id: utilizadorId });
        yield loadTasks();
    });
}
// Função para atualizar a tarefa como concluída
export function toggleTarefaComplete(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield updateTask(id, { completed: true, data_conclusao: new Date().toDateString() });
        yield loadTasks(); // aqui não deveria colocar complete como false?
    });
}
// Função para remover uma tarefa
export function removeTarefa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deleteTask(id);
        yield loadTasks();
    });
}
// função para obter tarefas pendentes
export function getTarefasPendentes() {
    return listaTarefa.filter(t => !t.completed);
}
// Função para obter tarefas de um utilizador (integração)
export function getTarefasPorUtilizador(utilizadorId) {
    return listaTarefa.filter(t => t.assignedTo === utilizadorId);
}
