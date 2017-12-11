export class List<T> {
    private dataStore: T[];
    private pos = 0;
    private listSize = 0;

    constructor() {
        this.dataStore = [];
    }

    append(element: T) {
        this.dataStore.push(element);
        this.listSize++;
    }

    private find(element: T): number {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }

    remove(element: T): boolean {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    }

    toString(): string {
        return String(this.dataStore);
    }

    insert(element: T, after: T): boolean {
        const insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    contains(element: T): boolean {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if (this.pos > -1) {
            this.pos--;
        }
    }

    next() {
        if (this.pos < this.listSize) {
            this.pos++;
        }
    }

    get currPos(): number {
        return this.pos;
    }

    get element(): T {
        return this.dataStore[this.pos];
    }

    get length(): number {
        return this.listSize;
    }
}