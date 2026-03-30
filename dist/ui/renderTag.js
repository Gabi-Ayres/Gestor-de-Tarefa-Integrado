var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllTarefas } from "../services/taskService.js";
import { getAllTags, getTasksByTagId } from "../services/tagService.js";
export function renderizarTags(tags) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = document.querySelector("#tag-list");
        yield renderTaskSelect();
        yield renderTagSelect();
        if (!list)
            return;
        list.innerHTML = "";
        tags.forEach((tag) => __awaiter(this, void 0, void 0, function* () {
            const task = yield getTasksByTagId(tag.id);
            const li = document.createElement("li");
            li.textContent = tag.nome;
            task.forEach(t => {
                console.log("Tarefas associadas à tag:", t);
                const atribuidoSpan = document.createElement("span");
                atribuidoSpan.innerHTML = `(<em>👤 Atribuída a:</em> ${t.title})`;
                atribuidoSpan.style.color = "#2563eb";
                atribuidoSpan.style.fontSize = "0.9em";
                atribuidoSpan.style.marginLeft = "10px";
                li.appendChild(atribuidoSpan);
            });
            list.appendChild(li);
        }));
    });
}
export function renderTaskSelect() {
    return __awaiter(this, void 0, void 0, function* () {
        const tarefas = getAllTarefas();
        if (tarefas) {
            const select = document.querySelector("#lista-task");
            tarefas.forEach(tarefa => {
                const opcao = document.createElement('option');
                opcao.value = tarefa.id.toString(); // envia o id da user
                opcao.textContent = tarefa.title; // mostra o nome da user
                select.appendChild(opcao);
            });
        }
    });
}
function renderTagSelect() {
    return __awaiter(this, void 0, void 0, function* () {
        const tags = getAllTags();
        if (tags) {
            const select = document.querySelector("#lista-tag");
            tags.forEach(tag => {
                const opcao = document.createElement('option');
                opcao.value = tag.id.toString(); // envia o id da user
                opcao.textContent = tag.nome; // mostra o nome da user
                select.appendChild(opcao);
            });
        }
    });
}
