export class IdGenerator {
    constructor() { } // usando private no constructor deixa a class mais segura.
    static generate() {
        this.counter++;
        return this.counter;
    }
}
IdGenerator.counter = 0;
