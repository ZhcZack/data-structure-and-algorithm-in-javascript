import { randomNumber } from "../algorithm/util";

interface HashTable {
    insert(value: number): void
    remove(value: number): void
    search(value: number): boolean
}

type Hashable = string | number

export class ZHash implements HashTable {
    private tables: Hashable[][]

    constructor() {
        this.tables = []
        for (let i = 0; i < 13; i++) {
            this.tables.push([])
        }
    }

    insert(value: Hashable | Hashable[]): void {
        if (Array.isArray(value)) {
            for (let v of value) {
                const index = fakeHash(v)
                this.tables[index].push(v)
            }
        } else {
            const index = fakeHash(value)
            this.tables[index].push(value)
        }
    }

    remove(value: Hashable): void {
        if (!this.search(value)) {
            return
        }
        const index = fakeHash(value)
        for (let i = 0; i < this.tables[index].length; i++) {
            if (this.tables[index][i] === value) {
                this.tables[index].splice(i, 1)
                return
            }
        }
    }

    search(value: Hashable): boolean {
        const index = fakeHash(value)
        for (let v of this.tables[index]) {
            if (v === value) {
                return true
            }
        }
        return false
    }

    // for debug
    display(): Hashable[] {
        const result: Hashable[] = []
        for (let table of this.tables) {
            for (let value of table) {
                result.push(value)
            }
        }
        return result
    }

}

function fakeHash(hashValue: Hashable): number {
    let result = 0
    if (typeof hashValue === 'string') {
        let finalCode = 0
        for (let char of hashValue) {
            finalCode += char.charCodeAt(0)
        }
        result = finalCode % 13
    } else if (typeof hashValue === 'number') {
        result = result % 13
    }
    return result
}