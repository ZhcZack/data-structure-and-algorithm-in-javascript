// 参考MDN上的Set来实现，没有实现generator
interface Set<T> {
    size: number
    add(value: T): void
    clear(): void
    delete(value: T): boolean
    forEach(callback: (value: T) => void): void
    has(value: T): boolean

    /**
     * 求两个Set的并集
     * @param set 另一个Set
     */
    union(set: Set<T>): Set<T>
    /**
     * 求两个Set的交集
     * @param set 另一个Set
     */
    intersect(set: Set<T>): Set<T>
    /**
     * 这个Set是不是另一个Set的子集
     * @param set 另一个Set
     */
    isSubsetOf(set: Set<T>): boolean

    // for debug
    display(): string
}

export class ZSet<T> implements Set<T> {
    private datas: T[] = []

    // for debug
    display(): string {
        return this.datas.join(',')
    }

    get size(): number {
        return this.datas.length
    }

    add(value: T): void {
        if (this.has(value)) {
            return
        }
        this.datas.push(value)
    }

    clear(): void {
        this.datas = []
    }

    delete(value: T): boolean {
        if (!this.has(value)) {
            return false
        }
        for (let i = 0; i < this.datas.length; i++) {
            if (this.datas[i] === value) {
                this.datas.splice(i, 1)
                return true
            }
        }
        return false
    }

    forEach(callback: (value: T) => void): void {
        for (let data of this.datas) {
            callback(data)
        }
    }

    has(value: T): boolean {
        for (let data of this.datas) {
            if (data === value) {
                return true
            }
        }
        return false
    }

    union(set: Set<T>): Set<T> {
        const newSet = new ZSet<T>()
        this.forEach(value => {
            newSet.add(value)
        })
        set.forEach(value => {
            newSet.add(value)
        })
        return newSet
    }

    intersect(set: Set<T>): Set<T> {
        const newSet = new ZSet<T>()
        this.forEach(value => {
            if (set.has(value)) {
                newSet.add(value)
            }
        })
        return newSet
    }

    isSubsetOf(set: Set<T>): boolean {
        let result = true
        if (this.size > set.size) {
            result = false
            return result
        }
        this.forEach(value => {
            if (!set.has(value)) {
                result = false
            }
        })
        return result
    }

}