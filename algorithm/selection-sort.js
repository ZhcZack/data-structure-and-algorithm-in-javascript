"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
