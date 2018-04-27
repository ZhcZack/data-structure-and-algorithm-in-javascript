/**
 * 选择排序
 * 
 * 将最左边的值定为“最小值”，然后遍历整个array，发现比“最小值”小的就将其定为“最小值”。遍历结束后对最左边和“最小值”进行互换，以此达到排序的目的。
 * 
 * 每一次上述的过程能排出一位数，下一次遍历的时候从已经排好位置的地方开始。
 */
export function selectionSort<T>(datas: T[]) {
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

function bigCompare<T>(value: T, target: T) {
    return value > target
}

function swap<T>(datas: T[], startIndex: number, smallIndex: number) {
    let temp = datas[startIndex]
    datas[startIndex] = datas[smallIndex]
    datas[smallIndex] = temp
}