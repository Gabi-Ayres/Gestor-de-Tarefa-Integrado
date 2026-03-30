import { renderizarTags } from "../ui/renderTag.js";
import { getTags, addTagToTask, createTag, getTasksByTag, deleteTag } from "../api/apiTagService.js";
import { ITag, TagClass } from "../models/index.js";

let listaTag: ITag[] = [];


export async function loadTags() {
    console.log('Loading tags...');
    const tagsApi = await getTags();
  listaTag = tagsApi.map(tApi => new TagClass(tApi.id, tApi.name  ));
  console.log('Tags loaded:', listaTag);  
  renderizarTags(listaTag);
}

export function getAllTags(): ITag[] {
    return listaTag;
};

export async function addtagTask(taskId: number, tagId: number): Promise <void> {
    await addTagToTask(taskId, tagId);
}

export async function addTag(nome: string): Promise <void> {
    await createTag(nome);
     await loadTags();
}

export async function getTasksByTagId(tagId: number): Promise<any[]> {
    const tarefas = await getTasksByTag(tagId);
    return tarefas;
}

// Função para remover uma tag
export async function removeTag(id: number): Promise<void> {
    await deleteTag(id);
    await loadTags();

}