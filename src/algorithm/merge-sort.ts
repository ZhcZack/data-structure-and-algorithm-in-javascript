/**
 * 归并排序
 * 
 * 使用了递归的思想，排序一个数组分为三个步骤：
 * 
 * - 排序左半部分
 * - 排序右半部分
 * - 合并两个部分
 */
export function mergeSort<T>(array: T[]): T[] {
    if (array.length <= 1) {
        return array
    } else {
        const middleIndex = Math.floor(array.length / 2)
        const leftPart = mergeSort(array.slice(0, middleIndex))
        const rightPart = mergeSort(array.slice(middleIndex, array.length))
        return combine(leftPart, rightPart)
    }
}

// 按照“从小到大”的方式合并两个数组
function combine<T>(leftArray: T[], rightArray: T[]): T[] {
    let result: T[] = []

    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift()!)
        } else {
            result.push(rightArray.shift()!)
        }
    }
    result = result.concat(leftArray).concat(rightArray)
    return result
}