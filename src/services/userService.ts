import { IUser, UtilizadorClass } from '../models/index.js';
import { getUsers, getUserById, updateUser, createUser, deleteUser, UserAPI, sortUsers, searchUsers } from '../api/apiUserService.js';
import { renderUtilizadores } from '../ui/renderUser.js';

// Aula 3 - Exercício 4: Funções de serviço

let listaUtilizadores: UtilizadorClass[] = [];
let ordenacao: boolean = true;

export async function loadUsers() {
  const userApi = await getUsers();
  listaUtilizadores = userApi.map(uApi => new UtilizadorClass(
        uApi.id, uApi.name, uApi.email, Boolean(uApi.active)));
  renderUtilizadores(listaUtilizadores);
}

export function getAllUtilizadores(): UtilizadorClass[] {
        return listaUtilizadores;
}

export async function searchUserByName(name:string): Promise<void> {
    const searchApi = await searchUsers(name);
    listaUtilizadores = searchApi.map(uApi => new UtilizadorClass(
        uApi.id, uApi.name, uApi.email, Boolean(uApi.active))
    );
    renderUtilizadores(listaUtilizadores);
}

export async function sortUserByTitle(): Promise<void> {
    const sort = ordenacao ? 'asc' : 'desc';
      const sortApi = await sortUsers(sort);
      listaUtilizadores = sortApi.map(uApi => new UtilizadorClass(
        uApi.id, uApi.name, uApi.email, Boolean(uApi.active))
    );
    ordenacao = !ordenacao;
    renderUtilizadores(listaUtilizadores);
    
}


export async function addUtilizador(utilizador: UtilizadorClass): Promise <void> {
    await createUser(utilizador.nome, utilizador.email);
    await loadUsers();
}

export async function alternarEstadoUtilizador(id: number): Promise <void> {
    const user = await getUserById(id);
     await updateUser(id, {active: !user.active});
     await loadUsers();

}

export async function removeUtilizador(id: number): Promise <void> {
    await deleteUser(id);
    await loadUsers();
}


export  function getUtilizadoresAtivos(): UtilizadorClass[] {
    return listaUtilizadores.filter(u => u.ativo);
}


export async function getUtilizadoresCount(): Promise  <{ total: number; ativo: number; inativo: number }> {
    const listaUtilizadores = await getUsers();
    const total = listaUtilizadores.length;
    const ativo = listaUtilizadores.filter(u => u.active).length;
    const inativo = total - ativo;
    return { total, ativo, inativo };
};



