import { UtilizadorClass } from '../models/index.js';
// Aula 3 - Exercício 4: Funções de serviço
let listaUtilizadores = [];
export function addUtilizador(utilizador) {
    listaUtilizadores.push(utilizador);
}
export function removeUtilizador(id) {
    listaUtilizadores = listaUtilizadores.filter(u => u.id !== id);
}
export function getAllUtilizadores() {
    return listaUtilizadores;
}
export function getUtilizadoresAtivos() {
    return listaUtilizadores.filter(u => u.ativo);
}
export function alternarEstadoUtilizador(id) {
    const utilizador = listaUtilizadores.find(u => u.id === id);
    if (utilizador) {
        utilizador.toggleEstado();
    }
}
export function getUtilizadoresCount() {
    const total = listaUtilizadores.length;
    const ativo = listaUtilizadores.filter(u => u.ativo).length;
    const inativo = total - ativo;
    return { total, ativo, inativo };
}
export function iniciarUtilizadores() {
    const utilizadoresIniciais = [
        new UtilizadorClass(1, "Débora Andrade", "deboraAndrade@gmail.com", true),
        new UtilizadorClass(2, "Taís Dias", "taisDias@gmail.com", true),
        new UtilizadorClass(3, "Alexeiev", "alex@gmail.com", false),
        new UtilizadorClass(4, "Natália", "natalia@gmail.com", true),
        new UtilizadorClass(5, "Bianca", "bianca@gmail.com", true),
    ];
    utilizadoresIniciais.forEach(u => addUtilizador(u));
}
