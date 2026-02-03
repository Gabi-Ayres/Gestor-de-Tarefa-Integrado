// Aula 3 - Exercício 6: Import e Export
// main.ts LIMPO - só coordena, não faz nada!
import { teste } from './teste/teste.js';
import { initializeData } from './services/index.js';
import { setupUserForm, setupTaskForm, initializeSelects, setupUserFilters, setupTaskFilters, setupUserSearch, setupTaskSearch, setupUserSort, setupTaskSort, updateUI, updateUITarefas } from './ui/index.js';
// Função principal de inicialização
function initializeApp() {
    // 1. Carregar dados iniciais
    initializeData();
    // 2. Configurar formulários
    setupUserForm();
    setupTaskForm();
    // 3. Configurar filtros
    setupUserFilters();
    setupTaskFilters();
    // 4. Configurar pesquisas
    setupUserSearch();
    setupTaskSearch();
    // 5. Configurar ordenação
    setupUserSort();
    setupTaskSort();
    // 6. Inicializar selects
    initializeSelects();
    // 7. Renderizar interface inicial
    updateUI();
    updateUITarefas();
    //console.log(SystemConfig.getInfo());
    teste();
}
// Aguardar DOM carregar
document.addEventListener('DOMContentLoaded', initializeApp);
