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
// GET /users
export function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users`);
        if (!res.ok)
            throw new Error('Erro ao buscar utilizadores');
        return yield res.json();
    });
}
// GET /users?search=nome
export function searchUsers(search) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users?search=${search}`);
        if (!res.ok)
            throw new Error('Erro ao pesquisar utilizadores');
        return yield res.json();
    });
}
// GET /users?sort=asc|desc
export function sortUsers(sort) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users?sort=${sort}`);
        if (!res.ok)
            throw new Error('Erro ao ordenar utilizadores');
        return yield res.json();
    });
}
// GET /users/:id
export function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users/${id}`);
        if (!res.ok)
            throw new Error('Erro ao buscar utilizador');
        return yield res.json();
    });
}
// POST /users
export function createUser(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        if (!res.ok) {
            const err = yield res.json();
            throw new Error(err.error || 'Erro ao criar utilizador');
        }
        return yield res.json();
    });
}
// PUT /users/:id
export function updateUser(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            const err = yield res.json();
            throw new Error(err.error || 'Erro ao atualizar utilizador');
        }
        return yield res.json();
    });
}
// DELETE /users/:id
export function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${BASE_URL}/users/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok)
            throw new Error('Erro ao eliminar utilizador');
    });
}
