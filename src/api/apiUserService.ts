const BASE_URL = 'http://localhost:3000';

export type UserAPI = {
  id: number;
  name: string;
  email: string;
  active: number | boolean;
}

// GET /users
export async function getUsers(): Promise<UserAPI[]> {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error('Erro ao buscar utilizadores');
  return await res.json();
}

// GET /users?search=nome
export async function searchUsers(search: string): Promise<UserAPI[]> {
  const res = await fetch(`${BASE_URL}/users?search=${search}`);
  if (!res.ok) throw new Error('Erro ao pesquisar utilizadores');
  return await res.json();
}

// GET /users?sort=asc|desc
export async function sortUsers(sort: string): Promise<UserAPI[]> {
  const res = await fetch(`${BASE_URL}/users?sort=${sort}`);
  if (!res.ok) throw new Error('Erro ao ordenar utilizadores');
  return await res.json();
}

// GET /users/:id
export async function getUserById(id: number): Promise<UserAPI> {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error('Erro ao buscar utilizador');
  return await res.json();
}

// POST /users
export async function createUser(name: string, email: string): Promise<UserAPI> {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Erro ao criar utilizador');
  }
  return await res.json();
}

// PUT /users/:id
export async function updateUser(id: number, data: Partial<UserAPI>): Promise<UserAPI> {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Erro ao atualizar utilizador');
  }
  return await res.json();
}

// DELETE /users/:id
export async function deleteUser(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Erro ao eliminar utilizador');
}