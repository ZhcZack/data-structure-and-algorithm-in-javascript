export class CArray {
    private dataStore: number[]
    private pos: number

    constructor(public numElements: number) {
        this.dataStore = []
        this.pos = 0

        for (let i = 0; i < numElements; i++) {
            this.dataStore[i] = i
        }
    }

    setData() {
        for (let i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
        }
    }

    reset() {
        this.setData()
    }

    clear() {
        for (let i = 0; i < this.dataStore.length; i++) {
            this.dataStore[i] = 0
        }
    }

    insert(element: number) {
        this.dataStore[this.pos] = element
        this.pos++
    }

    toString() {
        let restr = ''
        for (let i = 0; i < this.dataStore.length; i++) {
            restr += this.dataStore[i] + ' '
            if (i > 0 && i % 10 === 0) {
                restr += '\n'
            }
        }
        return restr
    }

    swap(arr: number[], index1: number, index2: number) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    bubbleSort() {
        let nums = this.dataStore.length
        let sorted = 0
        for (let i = 0; i < nums - 1; i++) {
            for (let j = 0; j < nums - 1 - sorted; j++) {
                if (this.dataStore[j] > this.dataStore[j + 1]) {
                    this.swap(this.dataStore, j, j + 1)
                }
            }
            sorted++
        }
    }

    selectionSort() {
        let nums = this.dataStore.length
        let sorted = 0
        let minIndex = 0
        let min = 0
        for (let i = 0; i < nums; i++) {
            minIndex = i
            min = this.dataStore[minIndex]
            for (let j = sorted + 1; j < nums; j++) {
                if (this.dataStore[j] < min) {
                    minIndex = j
                    min = this.dataStore[j]
                }
            }
            this.swap(this.dataStore, i, minIndex)
            sorted++
        }
    }

    insertionSort() {
        let nums = this.dataStore.length
        let sorted = 0
        let temp: number
        let tempIndex = 0
        for (let i = 1; i < nums; i++) {
            temp = this.dataStore[i]
            tempIndex = i
            for (let j = sorted; j >= 0; j--) {
                if (this.dataStore[j] > temp) {
                    this.swap(this.dataStore, j, tempIndex)
                    tempIndex = j
                }
            }
            sorted++
        }
    }
}