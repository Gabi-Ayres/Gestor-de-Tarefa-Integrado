// Aula 4 - Exercício 10: Sistema de notificações
export class NotificationService {
    notifyUser(userId, message) {
        console.log(`👤 Utilizador #${userId}: ${message}`);
    }
    notifyGroup(userIds, message) {
        userIds.forEach(userId => {
            this.notifyUser(userId, message);
        });
    }
    notifyAdmins(message) {
        console.log(`👑 ADMINS: ${message}`);
    }
}
