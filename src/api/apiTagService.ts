const BASE_URL = 'http://localhost:3000';

export type TagAPI = {
  id: number;
  name: string;
}

export type TaskTagAPI = {
  title: string;
  name: string;
}


// GET /tags
export async function getTags(): Promise<TagAPI[]> {
  console.log('Fetching tags from API...');
  const res = await fetch(`${BASE_URL}/tags`);
  if (!res.ok) throw new Error('Erro ao buscar tags');
  return await res.json();
}

// POST /tags
export async function createTag(name: string): Promise<TagAPI> {
  const res = await fetch(`${BASE_URL}/tags`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Erro ao criar tag');
  }
  return await res.json();
}

// DELETE /tags/:id
export async function deleteTag(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/tags/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Erro ao eliminar tag');
}

// GET /tags/:id/tasks
export async function getTasksByTag(id: number): Promise<TaskTagAPI[]> {
  const res = await fetch(`${BASE_URL}/tags/${id}/tasks`);
  if (!res.ok) throw new Error('Erro ao buscar tarefas da tag');
  return await res.json();
}

// POST /tasks/:id/tags
export async function addTagToTask(taskId: number, tagId: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}/tags`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tagId })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Erro ao adicionar tag à tarefa');
  }
}