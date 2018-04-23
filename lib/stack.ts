type PrimitiveType = string | number | boolean;

export class Stack<T> {
    private dataScore: T[];
    private top: number;

    constructor() {
        this.dataScore = [];
        this.top = 0;
    }

    push(element: T) {
        this.dataScore[this.top] = element;
        this.top++;
    }

    peek(): T | undefined {
        return this.dataScore[this.top - 1];
    }

    pop(): T | null {
        this.top--;
        return this.top >= 0 ? this.dataScore[this.top] : null;
    }

    clear() {
        this.top = 0;
    }

    get length(): number {
        return this.top;
    }
}