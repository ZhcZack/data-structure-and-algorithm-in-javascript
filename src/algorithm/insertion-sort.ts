/**
 * 插入排序
 * 
 * 一开始的时候将最左边的数放入”已排序数组”中，接着从“未排序数组”里依次迭代，取出数值与“已排序数组”从右至左进行比较。
 * 
 * 比较的方法：如果取出的数值小于“已排序数组”中的值，将“已排序数组”中的值向右移一位，然后继续比较；直到数值大于“已排序数组”中的值或者“已排序数组”已经比较到了最后一位，将取出的数值插入“已排序数组“中的对应位置，同时“已排序数组”的长度增加一位。
 * 
 * 当“未排序数组”中的所有值都进行过比较之后，排序结束。
 */
export function insertionSort<T>(array: T[]) {
    let sorted = 0
    let extract = 0
    for (let i = sorted + 1; i < array.length; i++) {
        let extract = array[i]
        for (let j = sorted; j >= 0; j--) {
            if (extract < array[j]) {
                array[j + 1] = array[j]
                if (j === 0) {
                    array[0] = extract
                    break
                }
            } else {
                array[j + 1] = extract
                break
            }
        }
        sorted++
    }
}