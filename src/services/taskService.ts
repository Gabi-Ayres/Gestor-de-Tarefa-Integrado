import { ITask } from '../tasks/index.js';
import { processTask } from '../tasks/taskUtils.js';

// Aula 3 - Exercício 4: Funções de serviço para tarefas
// Agora suporta TODOS os tipos de tarefas (polimorfismo)

// Array de tarefas (aceita qualquer tipo que implemente ITask)
let listaTarefa: ITask[] = [];

export function addTarefa(tarefa: ITask): void {
    listaTarefa.push(tarefa);
    processTask(tarefa, tarefa.assignedTo); // Polimorfismo em ação!
}

export function removeTarefa(id: number): void {
    listaTarefa = listaTarefa.filter(t => t.id !== id);
}

export function getAllTarefas(): ITask[] {
    return listaTarefa;
}

export function getTarefasPendentes(): ITask[] {
    return listaTarefa.filter(t => !t.completed);
}

export function toggleTarefaComplete(id: number): void {
    const tarefa = listaTarefa.find(t => t.id === id);
    if (tarefa) {
        tarefa.completed = !tarefa.completed;
        if (tarefa.completed) {
            tarefa.marcarComoConcluida(); // Cada tipo tem seu comportamento!
        } else {
            tarefa.dataConclusao = undefined;
        }
        processTask(tarefa, tarefa.assignedTo);
    }
}

export function editarTarefa(id: number, novoTitulo: string): void {
    const tarefa = listaTarefa.find(t => t.id === id);
    if (tarefa && novoTitulo.trim() !== "") {
        tarefa.title = novoTitulo.trim();
    }
}

export function getTarefasCount(): { total: number; concluidas: number; pendentes: number } {
    const total = listaTarefa.length;
    const concluidas = listaTarefa.filter(t => t.completed).length;
    const pendentes = total - concluidas;
    return { total, concluidas, pendentes };
}

// Função para atribuir tarefa a utilizador (integração)
export function atribuirTarefaAUtilizador(tarefaId: number, utilizadorId: number): void {
    const tarefa = listaTarefa.find(t => t.id === tarefaId);
    if (tarefa) {
        tarefa.assignedTo = utilizadorId;
    }
}

// Função para obter tarefas de um utilizador (integração)
export function getTarefasPorUtilizador(utilizadorId: number): ITask[] {
    return listaTarefa.filter(t => t.assignedTo === utilizadorId);
}



