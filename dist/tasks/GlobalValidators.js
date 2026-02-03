export class GlobalValidators {
    static isValidEmail(email) {
        return typeof email === "string" && email.includes("@");
    }
    static isNonEmpty(text) {
        return text.trim().length > 0;
    }
    static isPositiveNumber(value) {
        return value > 0;
    }
    static minLength(text, size) {
        return text.trim().length >= size;
    }
}
