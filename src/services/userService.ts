import { UtilizadorClass } from '../models/index.js';

// Aula 3 - Exercício 4: Funções de serviço

let listaUtilizadores: UtilizadorClass[] = [];

export function addUtilizador(utilizador: UtilizadorClass): void {
    listaUtilizadores.push(utilizador);
}

export function removeUtilizador(id: number): void {
    listaUtilizadores = listaUtilizadores.filter(u => u.id !== id);
}

export function getAllUtilizadores(): UtilizadorClass[] {
    return listaUtilizadores;
}

export function getUtilizadoresAtivos(): UtilizadorClass[] {
    return listaUtilizadores.filter(u => u.ativo);
}

export function alternarEstadoUtilizador(id: number): void {
    const utilizador = listaUtilizadores.find(u => u.id === id);
    if (utilizador) {
        utilizador.toggleEstado();
    }
}

export function getUtilizadoresCount(): { total: number; ativo: number; inativo: number } {
    const total = listaUtilizadores.length;
    const ativo = listaUtilizadores.filter(u => u.ativo).length;
    const inativo = total - ativo;
    return { total, ativo, inativo };
}

export function iniciarUtilizadores(): void {
    const utilizadoresIniciais: UtilizadorClass[] = [
        new UtilizadorClass(1, "Débora Andrade", "deboraAndrade@gmail.com", true),
        new UtilizadorClass(2, "Taís Dias", "taisDias@gmail.com", true),
        new UtilizadorClass(3, "Alexeiev", "alex@gmail.com", false),
        new UtilizadorClass(4, "Natália", "natalia@gmail.com", true),
        new UtilizadorClass(5, "Bianca", "bianca@gmail.com", true),
    ];
    
    utilizadoresIniciais.forEach(u => addUtilizador(u));
}
