// Aula 4 - Exercício 8: Sistema de permissões (implementação mínima)
export var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MEMBER"] = "MEMBER";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["VIEWER"] = "VIEWER";
})(UserRole || (UserRole = {}));
export function canCreateTask(role) {
    return true; // Todos podem criar
}
export function canEditTask(role) {
    return true; // Todos podem editar
}
export function canDeleteTask(role) {
    return true; // Todos podem deletar
}
