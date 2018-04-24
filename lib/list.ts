// 列表，可迭代
interface List<T> {
    length: number
    element: T
    append(element: T): void
    remove(element: T): boolean
    clear(): void
    contains(element: T): boolean
    toString(): string
    // move
    front(): void
    next(): void
    prev(): void
}

export class ZList<T> implements List<T> {
    private elements: T[] = []
    private index = 0

    get length(): number {
        return this.elements.length
    }

    get element(): T {
        return this.elements[this.index]
    }

    front() {
        this.index = 0
    }

    next() {
        this.index += 1
        if (this.index >= this.length) {
            this.index = this.length - 1
        }
    }

    prev() {
        this.index -= 1
        if (this.index <= 0) {
            this.index = 0
        }
    }

    append(element: T): void {
        this.elements.push(element)
    }

    remove(element: T): boolean {
        const result = this.contains(element)
        if (!result) {
            return false
        }
        for (let i = 0; i < this.length; i++) {
            if (this.elements[i] === element) {
                this.elements.splice(i, 1)
                return true
            }
        }
        return false
    }

    clear(): void {
        this.elements = []
        this.index = 0
    }

    contains(element: T): boolean {
        for (let el of this.elements) {
            if (element === el) {
                return true
            }
        }
        return false
    }

    toString(): string {
        return this.elements.join(',')
    }

}