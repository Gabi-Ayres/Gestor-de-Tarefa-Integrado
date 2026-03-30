var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = 'http://localhost:3000';
// GET /tags
export function getTags() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Fetching tags from API...');
        const res = yield fetch(`${BASE_URL}/tags`);
        if (!res.ok)
            throw new Error('Erro ao buscar tags');
        return yield res.json();
    });
}
// POST /tags
export function createTag(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tags`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        if (!res.ok) {
            const err = yield res.json();
            throw new Error(err.error || 'Erro ao criar tag');
        }
        return yield res.json();
    });
}
// DELETE /tags/:id
export function deleteTag(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tags/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok)
            throw new Error('Erro ao eliminar tag');
    });
}
// GET /tags/:id/tasks
export function getTasksByTag(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tags/${id}/tasks`);
        if (!res.ok)
            throw new Error('Erro ao buscar tarefas da tag');
        return yield res.json();
    });
}
// POST /tasks/:id/tags
export function addTagToTask(taskId, tagId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks/${taskId}/tags`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tagId })
        });
        if (!res.ok) {
            const err = yield res.json();
            throw new Error(err.error || 'Erro ao adicionar tag à tarefa');
        }
    });
}
