// 栈，先进后出
interface Stack<T> {
    readonly length: number
    push(element: T): void
    peek(): T | undefined
    pop(): T | null
    clear(): void
}

export class ZStack<T> implements Stack<T> {
    private elements: T[] = []

    get length(): number {
        return this.elements.length
    }

    push(element: T) {
        this.elements.push(element)
    }

    peek(): T | undefined {
        return this.elements[this.length - 1]
    }

    pop(): T | null {
        return this.length <= 0 ? null : this.elements.pop()!
    }

    clear() {
        this.elements = []
    }
}