export class Set<T> {
    private datastore: T[]

    constructor() {
        this.datastore = []
    }

    add(data: T): boolean {
        if (this.datastore.indexOf(data) < 0) {
            this.datastore.push(data)
            return true
        }
        return false
    }

    remove(data: T): boolean {
        const pos = this.datastore.indexOf(data)
        if (pos > -1) {
            this.datastore.splice(pos, 1)
            return true
        }
        return false
    }

    show(): string {
        return this.datastore.join(',')
    }

    private contains(data: T): boolean {
        if (this.datastore.indexOf(data) < 0) {
            return false
        }
        return true
    }

    union(set: Set<T>): Set<T> {
        const tempSet = new Set<T>()
        for (let i = 0; i < this.datastore.length; i++) {
            tempSet.add(this.datastore[i])
        }
        for (let i = 0; i < set.datastore.length; i++) {
            if (!tempSet.contains(set.datastore[i])) {
                tempSet.add(set.datastore[i])
            }
        }
        return tempSet
    }

    intersect(set: Set<T>): Set<T> {
        const tempSet = new Set<T>()
        for (let i = 0; i < this.datastore.length; i++) {
            if (set.contains(this.datastore[i])) {
                tempSet.add(this.datastore[i])
            }
        }
        return tempSet
    }

    get size(): number {
        return this.datastore.length
    }

    subset(set: Set<T>): boolean {
        if (this.size > set.size) {
            return false
        }
        for (let i = 0; i < this.size; i++) {
            if (!set.contains(this.datastore[i])) {
                return false
            }
        }
        return true
    }

    difference(set: Set<T>): Set<T> {
        const tempSet = new Set<T>()
        for (let i = 0; i < this.size; i++) {
            if (!set.contains(this.datastore[i])) {
                tempSet.add(this.datastore[i])
            }
        }
        return tempSet
    }
}