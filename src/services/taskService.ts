import { ITask, TarefaClass, TaskPriority } from '../tasks/index.js';
import { processTask } from '../tasks/taskUtils.js';
import { getTasks, createTask, deleteTask, updateTask, getTaskById, getTaskStats, TaskAPI, sortTasks, searchTasks } from '../api/apiTaskService.js';
import { renderizarLista } from '../ui/renderTask.js';

//Feito toda as assincronizações das funções Tasks 
let listaTarefa: ITask[] = [];
let ordenacao: boolean = true;


// Função para ter no cache do frontend.
export async function loadTasks(): Promise<void> {
    console.log("load tasks");
    const tasksApi = await getTasks();
    listaTarefa = tasksApi.map(tApi => new TarefaClass(
        tApi.id, tApi.title, undefined, tApi.completed, tApi.user_id, undefined)
    );
    renderizarLista(listaTarefa)
}

// função para obter todas as tarefas
export function getAllTarefas(): ITask[] {
    console.log("ver tasks")
    return listaTarefa;
}

// Função para pesquisar tarefas por título (integração)
export async function searchByTitle(title: string): Promise<void> {
    const searchApi = await searchTasks(title);
    listaTarefa = searchApi.map(tApi => new TarefaClass(
        tApi.id, tApi.title, undefined, tApi.completed, tApi.user_id, undefined)
    );
    renderizarLista(listaTarefa);
}

// Função para ordenar a tarefa  (integração)
export async function sortTasksByTitle(): Promise<void> {
    const sort = ordenacao ? 'asc' : 'desc';
    const sortApi = await sortTasks(sort);
    listaTarefa = sortApi.map(tApi => new TarefaClass(
        tApi.id, tApi.title, undefined, tApi.completed, tApi.user_id, undefined)
    );
    ordenacao = !ordenacao;
    renderizarLista(listaTarefa);
}

// Função para obter as estatísticas das tarefas
export async function getTarefasCount(): Promise<{ total: number; concluidas: number; pendentes: number }> {
    const status = await getTaskStats();
    return { total: status.total, concluidas: status.concluida, pendentes: status.pendentes };
}

// Função para criar uma tarefa
export async function addTarefa(tarefa: ITask): Promise<void> {
    const userId = tarefa.assignedTo || 1;
    await createTask(tarefa.title, tarefa.categoria, userId);
    processTask(tarefa, tarefa.assignedTo); // Polimorfismo em ação!
    await loadTasks();
}

// Função para editar o título da tarefa
export async function editarTarefa(id: number, novoTitulo: string): Promise<void> {
    await updateTask(id, { title: novoTitulo });
    await loadTasks();
}

// Função para atribuir tarefa a utilizador (integração)
export async function atribuirTarefaAUtilizador(tarefaId: number, utilizadorId: number): Promise<void> {
    await updateTask(tarefaId, { user_id: utilizadorId });
    await loadTasks();
}

// Função para atualizar a tarefa como concluída
export async function toggleTarefaComplete(id: number): Promise<void> {

    await updateTask(id, { completed: true, data_conclusao: new Date().toDateString() });
    await loadTasks(); 
}

// Função para remover uma tarefa
export async function removeTarefa(id: number): Promise<void> {
    await deleteTask(id);
    await loadTasks();

}

// função para obter tarefas pendentes
export function getTarefasPendentes(): ITask[] {
    return listaTarefa.filter(t => !t.completed);
}


// Função para obter tarefas de um utilizador (integração)
export function getTarefasPorUtilizador(utilizadorId: number): ITask[] {
    return listaTarefa.filter(t => t.assignedTo === utilizadorId);
}





