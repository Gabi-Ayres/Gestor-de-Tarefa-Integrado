import { GlobalValidators, IdGenerator } from '../tasks/index.js';
import { SystemLogger } from '../logs/index.js';
import { SystemConfig } from '../services/SystemConfig.js';
import { BusinessRules } from '../services/BusinessRules.js';
import { EntityList } from '../tasks/EntityList.js';
import { SimpleCache } from '../tasks/SimpleCache.js';
import { Favorites } from '../tasks/Favorites.js';
import { Paginator } from '../tasks/Paginator.js';
import { TagManager } from '../tasks/TagManager.js';
import { WatcherSystem } from '../tasks/WatcherSystem.js';
import { PriorityManager } from '../tasks/PriorityManager.js';
import { RatingSystem } from '../tasks/RatingSystem.js';
import { DependencyGraph } from '../tasks/DependencyGraph.js';


export function teste() {

SystemConfig.setEnvironment("development");
const configInfo = SystemConfig.getInfo();
SystemLogger.log(`Sistema iniciado em: ${configInfo.environment}`);

const userId = IdGenerator.generate();
const taskId = IdGenerator.generate();
SystemLogger.log(`Novo usuário criado com ID: ${userId}`);
SystemLogger.log(`Nova tarefa criada com ID: ${taskId}`);

const email = "ana@teste.com";
if (GlobalValidators.isValidEmail(email)) {
  SystemLogger.log(`Email válido: ${email}`);
} else {
  SystemLogger.log(`Email inválido: ${email}`);
}

const taskBlocked = false;
if (BusinessRules.canTaskBeCompleted(taskBlocked)) {
  SystemLogger.log(`Tarefa ${taskId} pode ser concluída.`);
} else {
  SystemLogger.log(`Tarefa ${taskId} está bloqueada.`);
}

SystemLogger.log("Fluxo de integração concluído com sucesso.");

console.log("===== LOGS DO SISTEMA =====");
SystemLogger.getLogs().forEach((log) => console.log(log));
console.log("============================"); 
}


console.log(("===== EntityList ====="))
const userList = new EntityList<{id: number, name:string}>();
userList.add({id: 1, name: "Debora"});
userList.add({id: 2, name: "Natalia"});

const taskList = new EntityList<{id: number, title:string}>();
taskList.add({id: 2, title: "Estudar"});

console.log(userList.getAll());
console.log(taskList.getAll());


console.log(("===== SimpleCache ====="))
const userCache = new SimpleCache();
userCache.set(1, {id: 1, name: "Debora"});
console.log(userCache.get(1));

const taskCache = new SimpleCache();
taskCache.set(10, {id: 2, title: "Estudar"});
console.log(taskCache.get(10));


console.log(("===== Favorites ====="))
const favUsers = new Favorites();
favUsers.add({id: 1, name: "Debora"});
favUsers.add({id: 2, name: "Natalia"});
favUsers.remove({id: 1, name: "Debora"});
console.log(favUsers.getAll());

const favTasks = new Favorites();
favTasks.add({id: 2, title: "Estudar"});
console.log(favTasks.exists({id: 2, title: "Estudar"}));

console.log(("===== Paginator ====="))
const paginator = new Paginator();
const page1 = paginator.paginate(userList.getAll(), 1, 2);
const page2 = paginator.paginate(userList.getAll(), 2, 2);

console.log(page1);
console.log(page2);



console.log(("===== TagManager ====="))
const tagManager = new TagManager<object>();

const task1 = { id: 1, title: 'Corrigir bug' };

tagManager.addTag(task1, 'urgente');
tagManager.addTag(task1, 'backend');

console.log(tagManager.getTags(task1));



console.log(("===== WatcherSystem ====="))
const watcherSystem = new WatcherSystem<object, object>();

const task2 = { id: 1, title: 'Implementar login' };
const user1 = { id: 1, name: 'Daniel' };
const user2 = { id: 2, name: 'Taís' };

watcherSystem.watch(task2, user1);
watcherSystem.watch(task2, user2);

console.log(watcherSystem.getWatchers(task2));


console.log(("===== PriorityManager ====="))
const priorityManager = new PriorityManager<object>();

const task3 = { id: 1, title: 'Fix login bug' };
const task4 = { id: 2, title: 'Update docs' };

priorityManager.setPriority(task3, 5);
priorityManager.setPriority(task4, 1);

console.log(priorityManager.getPriority(task3));


console.log(("===== RatingSystem ====="))
const ratingSystem = new RatingSystem<object>();

ratingSystem.rate(task1, 5);
ratingSystem.rate(task1, 3);

console.log(ratingSystem.getAverage(task1));


console.log(("===== DependencyGraph ====="))
const depGraph = new DependencyGraph<object>();

depGraph.addDependency(task2, task1);
depGraph.addDependency(task3, task2);

console.log(depGraph.getDependencies(task2));
