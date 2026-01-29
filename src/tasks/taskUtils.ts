import { ITask } from './ITask.js';

// Aula 4 - Exercício 7: Polimorfismo funcional
// Função genérica que muda comportamento conforme tipo da tarefa

export function processTask(task: ITask, userId?: number): void {
    const taskType = task.getType();
    
    console.log(`\nProcessando tarefa tipo: ${taskType.toUpperCase()}`);
    
    switch (taskType) {
        case 'bug':
            // BUGS: Validações rígidas, mais atenção
            console.log(`[BUG CRÍTICO] "${task.title}"`);
            console.log(`Status: ${task.status}`);
            console.log(`Requer workflow rigoroso!`);
            
            if (task.status === 'IN_PROGRESS') {
                console.log(`Bug em desenvolvimento - Alta prioridade!`);
            }
            
            if (task.completed) {
                console.log(`Bug resolvido e testado!`);
            }
            break;

        case 'feature':
            // FEATURES: Mais flexível, menos validações
            console.log(`[NOVA FEATURE] "${task.title}"`);
            console.log(`Status: ${task.status}`);
            console.log(`Workflow flexível permitido`);
            
            if (task.completed) {
                console.log(`Feature implementada com sucesso!`);
                if (userId) {
                    console.log(`Responsável: Utilizador #${userId}`);
                }
            }
            break;

        case 'task':
            // TAREFAS NORMAIS: Comportamento padrão
            console.log(`[TAREFA NORMAL] "${task.title}"`);
            console.log(`Status: ${task.status}`);
            
            if (task.completed) {
                console.log(`✓ Tarefa concluída!`);
            }
            break;

        default:
            console.log(`Tipo desconhecido: ${taskType}`);
    }
    
    console.log(`---`);
}

// Demonstração de polimorfismo: mesma função, comportamentos diferentes!
export function validarTransicao(task: ITask, novoStatus: string): boolean {
    const tipo = task.getType();
    
    if (tipo === 'bug') {
        // Bugs têm validação rígida (feita no moveTo)
        console.log(`Validando transição de BUG...`);
        return true; // A validação real está no BugTask.moveTo()
    } else if (tipo === 'feature') {
        // Features sempre permitem transição
        console.log(`Feature pode mudar livremente`);
        return true;
    } else {
        // Tarefas normais permitem
        console.log(`Tarefa normal - transição permitida`);
        return true;
    }
}
