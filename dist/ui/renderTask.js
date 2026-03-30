var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toggleTarefaComplete, removeTarefa, editarTarefa, getAllTarefas, getTarefasCount } from '../services/index.js';
import { getAllUtilizadores } from '../services/userService.js';
// Aula 3 - Exercício 5: Renderização UI para tarefas
const coresCategorias = {
    'Trabalho': '#ff4d4d',
    'Pessoal': '#4dabff',
    'Outros': '#4dff88'
};
const coresTipos = {
    'bug': '#dc2626',
    'feature': '#10b981',
    'task': '#6b7280'
};
const emojis = {
    'bug': '🐛',
    'feature': '✨',
    'task': '📝'
};
function renderUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield getAllUtilizadores();
        console.log("render users", users);
        if (users) {
            const select = document.querySelector("#task-utilizador");
            users.forEach(user => {
                const opcao = document.createElement('option');
                opcao.value = user.id.toString(); // envia o id da user
                opcao.textContent = user.nome; // mostra o nome da user
                select.appendChild(opcao);
            });
        }
    });
}
export function renderizarLista(tarefas) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = document.querySelector("#task-list");
        yield renderUsers();
        if (!list)
            return;
        list.innerHTML = "";
        tarefas.forEach((tarefa) => __awaiter(this, void 0, void 0, function* () {
            const li = document.createElement("li");
            li.innerHTML = criarElementoTarefa(tarefa);
            if (tarefa.completed) {
                const span = li.querySelector("span");
                if (span)
                    span.style.textDecoration = "line-through";
            }
            li.addEventListener("click", () => {
                toggleTarefaComplete(tarefa.id);
                updateUITarefas();
            });
            // Mostra tipo da tarefa
            const tipo = tarefa.getType();
            const tipoSpan = document.createElement("span");
            tipoSpan.innerHTML = `${emojis[tipo]} ${tipo.toUpperCase()}`;
            tipoSpan.style.backgroundColor = coresTipos[tipo];
            tipoSpan.style.color = "white";
            tipoSpan.style.padding = "2px 8px";
            tipoSpan.style.borderRadius = "4px";
            tipoSpan.style.fontSize = "11px";
            tipoSpan.style.fontWeight = "bold";
            tipoSpan.style.marginLeft = "8px";
            li.appendChild(tipoSpan);
            // INTEGRAÇÃO: Mostra quem está atribuído
            if (tarefa.assignedTo) {
                const utilizadores = yield getAllUtilizadores();
                const utilizador = utilizadores.find(u => u.id === tarefa.assignedTo);
                if (utilizador) {
                    const atribuidoSpan = document.createElement("span");
                    atribuidoSpan.innerHTML = `(<em>👤 Atribuída a:</em> ${utilizador.nome})`;
                    atribuidoSpan.style.color = "#2563eb";
                    atribuidoSpan.style.fontSize = "0.9em";
                    atribuidoSpan.style.marginLeft = "10px";
                    li.appendChild(atribuidoSpan);
                }
            }
            if (tarefa.completed && tarefa.dataConclusao) {
                const dataSpan = document.createElement("span");
                dataSpan.innerHTML = `(<em>Tarefa Concluída em:</em> ${tarefa.dataConclusao.toLocaleDateString('pt-PT')})`;
                dataSpan.style.color = "green";
                dataSpan.style.fontSize = "0.9em";
                li.appendChild(dataSpan);
            }
            li.style.borderLeft = tarefa.completed
                ? "6px solid red"
                : "6px solid green";
            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.className = "btn-remove";
            botaoRemover.addEventListener("click", (e) => {
                e.stopPropagation();
                if (confirm(`Deseja remover a tarefa "${tarefa.title}"?`)) {
                    removeTarefa(tarefa.id);
                    updateUITarefas();
                }
            });
            const botaoEditar = document.createElement("button");
            botaoEditar.textContent = "Editar";
            botaoEditar.className = "btn-edit";
            botaoEditar.addEventListener("click", (e) => {
                e.stopPropagation();
                const novoTitulo = prompt("Editar Título da tarefa:", tarefa.title);
                if (novoTitulo !== null && novoTitulo.trim() !== "") {
                    editarTarefa(tarefa.id, novoTitulo);
                    updateUITarefas();
                }
            });
            li.appendChild(botaoRemover);
            li.appendChild(botaoEditar);
            list.appendChild(li);
        }));
        atualizarContadorTarefas();
    });
}
function criarElementoTarefa(tarefa) {
    const cor = coresCategorias[tarefa.categoria];
    const spanCategoria = `<span class="classCategoria" style="background-color: ${cor}; 
                         padding: 2px 8px; border-radius: 4px; color: white; font-size: 12px;">
                         ${tarefa.categoria}
                         </span>`;
    return `<span>${tarefa.title}</span>${spanCategoria}`;
}
export function atualizarContadorTarefas() {
    return __awaiter(this, void 0, void 0, function* () {
        const outputElement = document.getElementById('task-output');
        if (outputElement) {
            const { total, concluidas, pendentes } = yield getTarefasCount();
            outputElement.innerHTML = `Você tem <span style="color: red;">${pendentes}</span> tarefas pendentes.`;
        }
    });
}
export function updateUITarefas() {
    return __awaiter(this, void 0, void 0, function* () {
        renderizarLista(yield getAllTarefas());
        // Atualizar utilizadores também (para contador de tarefas)
        import('./renderUser.js').then(module => {
            module.updateUI();
        });
    });
}
