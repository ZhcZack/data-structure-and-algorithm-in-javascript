"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 选择排序
 *
 * 将最左边的值定为“最小值”，然后遍历整个array，发现比“最小值”小的就将其定为“最小值”。遍历结束后对最左边和“最小值”进行互换，以此达到排序的目的。
 *
 * 每一次上述的过程能排出一位数，下一次遍历的时候从已经排好位置的地方开始。
 */
function selectionSort(datas) {
    var smallIndex = 0;
    for (var i = 0; i < datas.length; i++) {
        smallIndex = i;
        for (var j = i; j < datas.length; j++) {
            if (bigCompare(datas[smallIndex], datas[j])) {
                smallIndex = j;
            }
        }
        swap(datas, i, smallIndex);
    }
}
exports.selectionSort = selectionSort;
function bigCompare(value, target) {
    return value > target;
}
function swap(datas, startIndex, smallIndex) {
    var temp = datas[startIndex];
    datas[startIndex] = datas[smallIndex];
    datas[smallIndex] = temp;
}
