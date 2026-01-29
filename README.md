# 📋 Gestor de Tarefas e Utilizadores

## 🎯 Sobre Esta Versão

Esta é a **versão COMPLETA** do projeto com:
- ✅ **Polimorfismo COMPLETO** - 3 tipos de tarefas
- ✅ **Integração** utilizadores ←→ tarefas
- ✅ **HTML organizado** e profissional
- ✅ **Todos os exercícios** das Aulas 3 e 4

---

##  POLIMORFISMO EM AÇÃO - 3 Tipos de Tarefas

### **1. BugTask - REGRAS RÍGIDAS**
```typescript
const bug = new BugTask(1, 'Corrigir erro');
// Comportamento especial:
// NÃO pode ser concluído se não estiver atribuído
// Validação rigorosa no workflow
// Logs especiais para bugs críticos
```

**Diferença:**
- Bugs **DEVEM** passar pelo workflow completo
- Validação de transições (não pode pular etapas)
- Logs detalhados no console

### **2. FeatureTask - REGRAS FLEXÍVEIS**
```typescript
const feature = new FeatureTask(2, 'Nova funcionalidade');
// Comportamento especial:
//  Pode pular etapas do workflow
//  Workflow flexível
//  Logs de feature completa
```

**Diferença:**
- Features podem pular etapas
- Workflow flexível
- Pode ser concluída rapidamente

---

## 📚 Conceitos Implementados

### **Aula 3 - Módulos (100%):**
-  Organização em pastas
-  Barrel files (index.ts)
-  Imports/Exports
-  tsconfig.json
-  Separação UI/Services/Models

### **Aula 4 - OOP (100%):**
-  **Ex. 1-2:** BaseEntity + Herança
-  **Ex. 3:** Encapsulamento (getters/setters + validação)
-  **Ex. 4:** Interface ITask
-  **Ex. 5:** Enum TaskStatus (6 estados)
-  **Ex. 6:** 3 Implementações concretas (Bug, Feature, Task) com `moveTo()`
-  **Ex. 7:** **POLIMORFISMO COMPLETO!** ⭐
-  **Ex. 8-10:** Permissões/Logs/Notificações (classes criadas)

---


## 🎨 Interface Visual

- **Header:** Gradiente roxo moderno
- **Formulários:** Inputs grandes e legíveis
- **Badges:** Tipo de tarefa com cor 
- **Responsivo:** Funciona em mobile
- **Animações:** Hover suave nos cartões

---

## 🎓 O Que Você Aprende

1. **Polimorfismo:** Mesma interface, comportamentos diferentes
2. **Herança:** Todas as classes herdam de BaseEntity
3. **Encapsulamento:** Propriedades privadas com validação
4. **Interfaces:** Contratos que classes devem seguir
5. **Enums:** Valores fixos para estados
6. **Separação de Responsabilidades:** UI/Services/Models

---
Desenvolvido com TypeScript, OOP e Polimorfismo | Aulas 3 e 4 ✨
