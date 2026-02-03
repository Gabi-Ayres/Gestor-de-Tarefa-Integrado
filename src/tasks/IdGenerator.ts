export class IdGenerator {
    private static counter: number = 0;

    private constructor() {} // usando private no constructor deixa a class mais segura.


    static generate(): number {
        this.counter++;
        return this.counter;
    }
}