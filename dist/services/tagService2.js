var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderizarTags } from "../ui/renderTag.js";
import { getTags, addTagToTask, createTag, getTasksByTag, deleteTag } from "../api/apiTagService.js";
import { TagClass } from "../models/index.js";
let listaTag = [];
export function loadTags() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Loading tags...');
        const tagsApi = yield getTags();
        listaTag = tagsApi.map(tApi => new TagClass(tApi.id, tApi.name));
        console.log('Tags loaded:', listaTag);
        renderizarTags(listaTag);
    });
}
export function getAllTags() {
    return listaTag;
}
;
export function addtagTask(taskId, tagId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield addTagToTask(taskId, tagId);
    });
}
export function addTag(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        yield createTag(nome);
        yield loadTags();
    });
}
export function getTasksByTagId(tagId) {
    return __awaiter(this, void 0, void 0, function* () {
        const tarefas = yield getTasksByTag(tagId);
        return tarefas;
    });
}
// Função para remover uma tag
export function removeTag(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deleteTag(id);
        yield loadTags();
    });
}
