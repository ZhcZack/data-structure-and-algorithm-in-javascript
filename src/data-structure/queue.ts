// 队列，在后面加入、从前面推出
interface Queue<T> {
    readonly size: number
    readonly empty: boolean
    readonly front: T | undefined
    readonly back: T | undefined
    enqueue(element: T): void
    dequeue(): T | undefined
}

// 反向队列，在前面加入、从后面推出
// （测试里也可以从后面加入`append`）
interface Deque<T> {
    readonly size: number
    readonly empty: boolean
    append(element: T): void
    pop(): T | undefined
    enqueue(element: T): void
    dequeue(): T | undefined
}

export class ZQueue<T> implements Queue<T> {
    get size(): number {
        return this.datas.length
    }

    get empty(): boolean {
        return this.size <= 0
    }

    get front(): T | undefined {
        return this.datas.shift()
    }

    get back(): T | undefined {
        return this.datas.pop()
    }

    // for debug
    toString(): string {
        return this.datas.join(',')
    }

    private datas: T[] = []

    enqueue(element: T): void {
        this.datas.push(element)
    }

    dequeue(): T | undefined {
        return this.front
    }

}

export class ZDeque<T> implements Deque<T> {
    get size(): number {
        return this.datas.length
    }

    get empty(): boolean {
        return this.size <= 0
    }

    // for debug
    toString(): string {
        return this.datas.join(',')
    }

    private datas: T[] = []

    enqueue(element: T): void {
        this.datas.unshift(element)
    }

    dequeue(): T | undefined {
        return this.datas.shift()
    }

    append(element: T): void {
        this.datas.push(element)
    }

    pop(): T | undefined {
        return this.datas.pop()
    }

}