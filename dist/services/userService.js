var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UtilizadorClass } from '../models/index.js';
import { getUsers, getUserById, updateUser, createUser, deleteUser, sortUsers, searchUsers } from '../api/apiUserService.js';
import { renderUtilizadores } from '../ui/renderUser.js';
// Aula 3 - Exercício 4: Funções de serviço
let listaUtilizadores = [];
let ordenacao = true;
export function loadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const userApi = yield getUsers();
        listaUtilizadores = userApi.map(uApi => new UtilizadorClass(uApi.id, uApi.name, uApi.email, Boolean(uApi.active)));
        renderUtilizadores(listaUtilizadores);
    });
}
export function getAllUtilizadores() {
    return listaUtilizadores;
}
export function searchUserByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchApi = yield searchUsers(name);
        listaUtilizadores = searchApi.map(uApi => new UtilizadorClass(uApi.id, uApi.name, uApi.email, Boolean(uApi.active)));
        renderUtilizadores(listaUtilizadores);
    });
}
export function sortUserByTitle() {
    return __awaiter(this, void 0, void 0, function* () {
        const sort = ordenacao ? 'asc' : 'desc';
        const sortApi = yield sortUsers(sort);
        listaUtilizadores = sortApi.map(uApi => new UtilizadorClass(uApi.id, uApi.name, uApi.email, Boolean(uApi.active)));
        ordenacao = !ordenacao;
        renderUtilizadores(listaUtilizadores);
    });
}
export function addUtilizador(utilizador) {
    return __awaiter(this, void 0, void 0, function* () {
        yield createUser(utilizador.nome, utilizador.email);
        yield loadUsers();
    });
}
export function alternarEstadoUtilizador(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUserById(id);
        yield updateUser(id, { active: !user.active });
        yield loadUsers();
    });
}
export function removeUtilizador(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deleteUser(id);
        yield loadUsers();
    });
}
export function getUtilizadoresAtivos() {
    return listaUtilizadores.filter(u => u.ativo);
}
export function getUtilizadoresCount() {
    return __awaiter(this, void 0, void 0, function* () {
        const listaUtilizadores = yield getUsers();
        const total = listaUtilizadores.length;
        const ativo = listaUtilizadores.filter(u => u.active).length;
        const inativo = total - ativo;
        return { total, ativo, inativo };
    });
}
;
