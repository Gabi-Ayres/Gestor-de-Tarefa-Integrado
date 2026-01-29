// Aula 4 - Exercício 8: Sistema de permissões (implementação mínima)

export enum UserRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
    MANAGER = "MANAGER",
    VIEWER = "VIEWER",
}

export function canCreateTask(role: UserRole): boolean {
    return true; // Todos podem criar
}

export function canEditTask(role: UserRole): boolean {
    return true; // Todos podem editar
}

export function canDeleteTask(role: UserRole): boolean {
    return true; // Todos podem deletar
}
