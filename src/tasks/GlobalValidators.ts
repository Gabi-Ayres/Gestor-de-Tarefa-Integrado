export class GlobalValidators {

static isValidEmail(email: string): boolean {
   return typeof email === "string" && email.includes("@");

}
static isNonEmpty(text: string): boolean {
    return text.trim().length > 0;


}
static isPositiveNumber(value: number): boolean {
    return value > 0;

}
static minLength(text: string, size: number): boolean{
    return text.trim().length >= size;

}

}