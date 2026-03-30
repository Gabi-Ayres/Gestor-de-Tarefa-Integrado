const BASE_URL = 'http://localhost:3000';

export type TaskAPI = {
  id: number;
  title: string;
  categoria: string;
  completed: boolean;
  data_conclusao: string | null;
  user_id: number;
}

export type TaskStats = {
  total: number;
  pendentes: number;
  concluida: number;
  porcentagemConcluida: string;
}

// GET /tasks
export async function getTasks(): Promise<TaskAPI[]> {
  const res = await fetch(`${BASE_URL}/tasks`);
  if (!res.ok) throw new Error('Erro ao buscar tarefas');
  return await res.json();
}

// GET /tasks?search=titulo
export async function searchTasks(search: string): Promise<TaskAPI[]> {
  const res = await fetch(`${BASE_URL}/tasks?search=${search}`);
  if (!res.ok) throw new Error('Erro ao pesquisar tarefas');
  return await res.json();
}

// GET /tasks?sort=asc|desc
export async function sortTasks(sort: string): Promise<TaskAPI[]> {
  const res = await fetch(`${BASE_URL}/tasks?sort=${sort}`);
  if (!res.ok) throw new Error('Erro ao ordenar tarefas');
  return await res.json();
}

// GET /tasks/:id
export async function getTaskById(id: number): Promise<TaskAPI> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`);
  if (!res.ok) throw new Error('Erro ao buscar tarefa');
  return await res.json();
}

// GET /tasks/stats
export async function getTaskStats(): Promise<TaskStats> {
  const res = await fetch(`${BASE_URL}/tasks/stats`);
  if (!res.ok) throw new Error('Erro ao buscar estatísticas');
  return await res.json();
}

// POST /tasks
export async function createTask(title: string, categoria: string, user_id: number): Promise<TaskAPI> {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, categoria, user_id })
  });
  if (!res.ok) {
    const err = await res.json(); 
    throw new Error(err.error || 'Erro ao criar tarefa'); // envia uma mensagem generica
  }
  return await res.json();
}

// PUT /tasks/:id
export async function updateTask(id: number, data: Partial<TaskAPI>): Promise<TaskAPI> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Erro ao atualizar tarefa');
  }
  return await res.json();
}

// DELETE /tasks/:id
export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Erro ao eliminar tarefa');
}