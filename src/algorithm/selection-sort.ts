export function selectionSort(datas: number[]) {
    let smallIndex = 0

    for (let i = 0; i < datas.length; i++) {
        smallIndex = i
        for (let j = i; j < datas.length; j++) {
            if (bigCompare(datas[smallIndex], datas[j])) {
                smallIndex = j
            }
        }
        swap(datas, i, smallIndex)
    }
}

function bigCompare(value: number, target: number) {
    return value > target
}

function swap(datas: number[], startIndex: number, smallIndex: number) {
    let temp = datas[startIndex]
    datas[startIndex] = datas[smallIndex]
    datas[smallIndex] = temp
}