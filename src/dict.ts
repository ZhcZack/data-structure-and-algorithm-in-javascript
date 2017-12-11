export class Dict<T> {
    private datastore: DictItem<T>

    constructor() {
        this.datastore = {}
    }

    add(key: string, value: T) {
        this.datastore[key] = value
    }

    find(key: string): T | undefined {
        return this.datastore[key]
    }

    remove(key: string) {
        delete this.datastore[key]
    }

    showAll(): string {
        let result: string[] = []
        for (let key in this.datastore) {
            result.push(key + ':' + this.datastore[key])
        }
        return result.join(',')
    }
}

interface DictItem<T> {
    [prop: string]: T
}