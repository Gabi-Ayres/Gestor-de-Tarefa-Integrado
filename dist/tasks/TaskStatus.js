// Aula 4 - Exercício 5: Enum de estados de tarefa
// Estados do ciclo de vida da tarefa
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["CREATED"] = "CREATED";
    TaskStatus["ASSIGNED"] = "ASSIGNED";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["BLOCKED"] = "BLOCKED";
    TaskStatus["COMPLETED"] = "COMPLETED";
    TaskStatus["ARCHIVED"] = "ARCHIVED";
})(TaskStatus || (TaskStatus = {}));
