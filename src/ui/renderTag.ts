import { getAllTarefas } from "../services/taskService.js";
import { ITag } from "../models/ITag.js";
import { getAllTags, getTasksByTagId } from "../services/tagService.js";


export async function renderizarTags(tags: ITag[]): Promise<void> {
    const list = document.querySelector("#tag-list") as HTMLUListElement;

    await renderTaskSelect();
    await renderTagSelect();

    if(!list) return;
    list.innerHTML = "";

    tags.forEach(async (tag) => {
        const task = await getTasksByTagId(tag.id);
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
    });
}

export async function renderTaskSelect() : Promise<void> {
const tarefas = getAllTarefas();

if (tarefas) {

     const select = document.querySelector("#lista-task") as HTMLUListElement;
     tarefas.forEach(tarefa => {
            const opcao = document.createElement('option');
                    opcao.value = tarefa.id.toString();       // envia o id da user
                    opcao.textContent = tarefa.title; // mostra o nome da user
                    select.appendChild(opcao);
     });
    }    
}

async function renderTagSelect() : Promise<void> {
const tags = getAllTags();

if (tags) {

     const select = document.querySelector("#lista-tag") as HTMLUListElement;
     tags.forEach(tag => {
            const opcao = document.createElement('option');
                    opcao.value = tag.id.toString();       // envia o id da user
                    opcao.textContent = tag.nome; // mostra o nome da user
                    select.appendChild(opcao);
     });
    }    
}
