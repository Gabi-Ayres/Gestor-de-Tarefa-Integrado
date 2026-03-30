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
// GET /tasks
export function getTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks`);
        if (!res.ok)
            throw new Error('Erro ao buscar tarefas');
        return yield res.json();
    });
}
// GET /tasks?search=titulo
export function searchTasks(search) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks?search=${search}`);
        if (!res.ok)
            throw new Error('Erro ao pesquisar tarefas');
        return yield res.json();
    });
}
// GET /tasks?sort=asc|desc
export function sortTasks(sort) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks?sort=${sort}`);
        if (!res.ok)
            throw new Error('Erro ao ordenar tarefas');
        return yield res.json();
    });
}
// GET /tasks/:id
export function getTaskById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks/${id}`);
        if (!res.ok)
            throw new Error('Erro ao buscar tarefa');
        return yield res.json();
    });
}
// GET /tasks/stats
export function getTaskStats() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks/stats`);
        if (!res.ok)
            throw new Error('Erro ao buscar estatísticas');
        return yield res.json();
    });
}
// POST /tasks
export function createTask(title, categoria, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, categoria, user_id })
        });
        if (!res.ok) {
            const err = yield res.json();
            throw new Error(err.error || 'Erro ao criar tarefa'); // envia uma mensagem generica
        }
        return yield res.json();
    });
}
// PUT /tasks/:id
export function updateTask(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            const err = yield res.json();
            throw new Error(err.error || 'Erro ao atualizar tarefa');
        }
        return yield res.json();
    });
}
// DELETE /tasks/:id
export function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/tasks/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok)
            throw new Error('Erro ao eliminar tarefa');
    });
}
