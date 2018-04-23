export class Queue<T> {
    private dataStore: T[] = [];

    enqueue(element: T) {
        this.dataStore.push(element);
    }

    dequeue(): T | undefined {
        return this.dataStore.shift();
    }

    get front(): T | undefined {
        return this.dataStore[0];
    }

    get back(): T | undefined {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString(): string {
        let retStr = '';
        for (let d of this.dataStore) {
            retStr += d + '\n';
        }
        return retStr;
    }

    get isEmpty(): boolean {
        return this.dataStore.length === 0;
    }
}

export class Deque<T> {
    private dataStore: T[] = [];

    append(element: T) {
        this.dataStore.push(element);
    }

    pop(): T | undefined {
        return this.dataStore.pop();
    }

    enqueue(element: T) {
        this.dataStore.unshift(element);
    }

    dequeue(): T | undefined {
        return this.dataStore.shift();
    }

    get length(): number {
        return this.dataStore.length;
    }

    get isEmpty(): boolean {
        return this.length === 0;
    }

    toString(): string {
        return this.dataStore.join(',');
    }
}