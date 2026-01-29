import { UtilizadorClass } from '../models/index.js';
import { TarefaClass, BugTask, FeatureTask } from '../tasks/index.js';
import { addUtilizador, getUtilizadoresAtivos } from '../services/userService.js';
import { addTarefa } from '../services/taskService.js';
import { updateUI } from './renderUser.js';
import { updateUITarefas } from './renderTask.js';
// Estado da aplicação
let nextUserId = 6;
let nextTaskId = 4;
// Função auxiliar para mostrar erro
function mostrarErro(mensagem) {
    const pErro = document.getElementById("pErro");
    if (pErro) {
        pErro.textContent = mensagem;
        pErro.style.color = "red";
    }
}
// Atualizar select de utilizadores
function atualizarSelectUtilizadores() {
    const select = document.getElementById("task-utilizador");
    if (!select)
        return;
    select.innerHTML = '<option value="">Sem atribuição</option>';
    const utilizadores = getUtilizadoresAtivos();
    utilizadores.forEach(u => {
        const option = document.createElement("option");
        option.value = u.id.toString();
        option.textContent = u.nome;
        select.appendChild(option);
    });
}
// Configurar formulário de utilizadores
export function setupUserForm() {
    const nomeInput = document.querySelector("#user-name");
    const emailInput = document.querySelector("#user-email");
    const adicionarBtn = document.querySelector("#user-add-btn");
    if (!nomeInput || !emailInput || !adicionarBtn)
        return;
    adicionarBtn.addEventListener("click", () => {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        if (nome === "" || !email.includes("@")) {
            alert("Por favor, preencha nome e email válido!");
            return;
        }
        try {
            const novoUtilizador = new UtilizadorClass(nextUserId++, nome, email, true);
            addUtilizador(novoUtilizador);
            updateUI();
            atualizarSelectUtilizadores();
            nomeInput.value = "";
            emailInput.value = "";
        }
        catch (error) {
            alert(`Erro: ${error.message}`);
        }
    });
}
// Configurar formulário de tarefas
export function setupTaskForm() {
    const input = document.querySelector("#task-input");
    const button = document.querySelector("#task-add-btn");
    const categoriaSelect = document.getElementById("task-categoria");
    const tipoSelect = document.getElementById("task-tipo");
    const utilizadorSelect = document.getElementById("task-utilizador");
    if (!input || !button || !categoriaSelect || !tipoSelect || !utilizadorSelect)
        return;
    button.addEventListener("click", () => {
        const taskText = input.value.trim();
        const categoriaSelecionada = categoriaSelect.value;
        const tipoSelecionado = tipoSelect.value;
        const utilizadorId = utilizadorSelect.value ? parseInt(utilizadorSelect.value) : undefined;
        if (taskText.length < 3) {
            mostrarErro("❌ O texto é inválido (mínimo 3 caracteres).");
            return;
        }
        mostrarErro("");
        // Polimorfismo: Cria o tipo correto
        let novaTarefa;
        switch (tipoSelecionado) {
            case 'bug':
                novaTarefa = new BugTask(nextTaskId++, taskText, categoriaSelecionada, utilizadorId);
                break;
            case 'feature':
                novaTarefa = new FeatureTask(nextTaskId++, taskText, categoriaSelecionada, utilizadorId);
                break;
            default:
                novaTarefa = new TarefaClass(nextTaskId++, taskText, categoriaSelecionada, false, utilizadorId);
        }
        addTarefa(novaTarefa);
        input.value = "";
        utilizadorSelect.value = "";
        updateUITarefas();
    });
}
// Inicializar selects
export function initializeSelects() {
    atualizarSelectUtilizadores();
}
