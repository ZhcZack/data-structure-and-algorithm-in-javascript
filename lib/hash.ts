// Hash什么的，js这个搞不明白……

import * as lib from './util'

export class HashTable {
    private table: string[]

    constructor() {
        this.table = new Array(137)
    }

    put(data: string) {
        let pos = this.betterHash(data)
        this.table[pos] = data
    }

    private simpleHash(data: string): number {
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i)
        }
        return total % this.table.length
    }

    private betterHash(data: string): number {
        const H = 37
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i)
        }
        total = total % this.table.length
        if (total < 0) {
            total += this.table.length - 1
        }
        return parseInt(String(total), 10)
    }

    showDistro() {
        let n = 0
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                lib.log(i + ': ' + this.table[i])
            }
        }
    }
}