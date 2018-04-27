"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 归并排序
 *
 * 使用了递归的思想，排序一个数组分为三个步骤：
 *
 * - 排序左半部分
 * - 排序右半部分
 * - 合并两个部分
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        var middleIndex = Math.floor(array.length / 2);
        var leftPart = mergeSort(array.slice(0, middleIndex));
        var rightPart = mergeSort(array.slice(middleIndex, array.length));
        return combine(leftPart, rightPart);
    }
}
exports.mergeSort = mergeSort;
// 按照“从小到大”的方式合并两个数组
function combine(leftArray, rightArray) {
    var result = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift());
        }
        else {
            result.push(rightArray.shift());
        }
    }
    result = result.concat(leftArray).concat(rightArray);
    return result;
}
