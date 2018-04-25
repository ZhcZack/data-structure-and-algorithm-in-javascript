"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 冒泡排序，从左到右以此检测值的大小，右边大于左边就交换两个数值，这就是一次“冒泡”
 *
 * 如果一次检查过程中出现过冒泡，那就从后一个值处开始下一轮检查过程，直到没有冒泡行为或已经检查到了最后一位数
 */
function bubbleSort(datas) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < datas.length - 1; i++) {
            if (bigCompare(datas[i], datas[i + 1])) {
                swap(datas, i);
                swapped = true;
            }
        }
    }
}
exports.bubbleSort = bubbleSort;
function bigCompare(value, target) {
    return value > target;
}
function swap(datas, index) {
    if (index < 0 || index > datas.length - 1) {
        return;
    }
    var temp = datas[index];
    datas[index] = datas[index + 1];
    datas[index + 1] = temp;
}
