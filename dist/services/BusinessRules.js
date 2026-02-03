export class BusinessRules {
    static canUserBeDeactivated(activeTasks) {
        return activeTasks === 0;
    }
    static canTaskBeCompleted(isBlocked) {
        return isBlocked === false;
    }
    static canAssignTask(active) {
        return active === true;
    }
    static isValidTitle(title) {
        return title.trim().length >= 3;
    }
}
