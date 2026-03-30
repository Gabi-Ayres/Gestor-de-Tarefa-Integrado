var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { alternarEstadoUtilizador, removeUtilizador, getAllUtilizadores, getUtilizadoresCount } from '../services/index.js';
import { getTarefasPorUtilizador } from '../services/taskService.js';
// Aula 3 - Exercício 5: Renderização UI
export function renderUtilizadores(utilizadores) {
    const contentor = document.querySelector("#user-container");
    if (!contentor)
        return;
    contentor.innerHTML = "";
    utilizadores.forEach((utilizador) => __awaiter(this, void 0, void 0, function* () {
        const card = document.createElement("div");
        card.className = 'card';
        const estadoTexto = utilizador.ativo ? "Ativo" : "Inativo";
        const estadoParagrafo = document.createElement("p");
        estadoParagrafo.innerHTML = `<strong>Estado:</strong> ${estadoTexto}`;
        estadoParagrafo.style.color = utilizador.ativo ? "green" : "red";
        // INTEGRAÇÃO: Conta tarefas do utilizador
        const tarefasDoUtilizador = yield getTarefasPorUtilizador(utilizador.id);
        const tarefasParagrafo = document.createElement("p");
        tarefasParagrafo.innerHTML = `<strong>Tarefas:</strong> ${tarefasDoUtilizador.length} tarefa(s) atribuída(s)`;
        tarefasParagrafo.style.fontStyle = "italic";
        card.innerHTML = `<h3><strong>Cartão do Utilizador</strong></h3>
      <p><strong>Nome:</strong> ${utilizador.nome}</p>
      <p><strong>Email:</strong> ${utilizador.email}</p>
      <button class="toggleBtn">${utilizador.ativo ? "Desativar" : "Ativar"}</button>`;
        card.style.borderLeft = utilizador.ativo
            ? "6px solid green"
            : "6px solid red";
        const botaoToggle = card.querySelector(".toggleBtn");
        botaoToggle.addEventListener("click", () => {
            alternarEstadoUtilizador(utilizador.id);
            updateUI();
        });
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.className = "btn-remove";
        removerBtn.addEventListener("click", () => {
            if (confirm(`Deseja remover o utilizador ${utilizador.nome}?`)) {
                removeUtilizador(utilizador.id);
                updateUI();
            }
        });
        card.appendChild(removerBtn);
        card.appendChild(estadoParagrafo);
        card.appendChild(tarefasParagrafo); // Mostra tarefas
        contentor.appendChild(card);
    }));
    atualizarContador();
}
export function atualizarContador() {
    return __awaiter(this, void 0, void 0, function* () {
        const contadorElement = document.getElementById('user-contador');
        if (contadorElement) {
            const { total, ativo, inativo } = yield getUtilizadoresCount();
            const estatistica = total > 0 ? ((ativo / total) * 100).toFixed(2) : '0';
            contadorElement.innerHTML = `
            <p><strong>Número total de utilizadores:</strong> ${total}</p>
            <p><strong>Utilizadores Ativos:</strong> <span style="color: green;">${ativo}</span></p>
            <p><strong>Utilizadores Inativos:</strong> <span style="color: red;">${inativo}</span></p>
            <p><strong>Estatística de Utilizadores Ativos:</strong> ${estatistica}%</p>
        `;
        }
    });
}
export function updateUI() {
    renderUtilizadores(getAllUtilizadores());
}
