"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CArray = /** @class */ (function () {
    function CArray(numElements) {
        this.numElements = numElements;
        this.dataStore = [];
        this.pos = 0;
        for (var i = 0; i < numElements; i++) {
            this.dataStore[i] = i;
        }
    }
    CArray.prototype.setData = function () {
        for (var i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    };
    CArray.prototype.reset = function () {
        this.setData();
    };
    CArray.prototype.clear = function () {
        for (var i = 0; i < this.dataStore.length; i++) {
            this.dataStore[i] = 0;
        }
    };
    CArray.prototype.insert = function (element) {
        this.dataStore[this.pos] = element;
        this.pos++;
    };
    CArray.prototype.toString = function () {
        var restr = '';
        for (var i = 0; i < this.dataStore.length; i++) {
            restr += this.dataStore[i] + ' ';
            if (i > 0 && i % 10 === 0) {
                restr += '\n';
            }
        }
        return restr;
    };
    CArray.prototype.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    CArray.prototype.bubbleSort = function () {
        var nums = this.dataStore.length;
        var sorted = 0;
        for (var i = 0; i < nums - 1; i++) {
            for (var j = 0; j < nums - 1 - sorted; j++) {
                if (this.dataStore[j] > this.dataStore[j + 1]) {
                    this.swap(this.dataStore, j, j + 1);
                }
            }
            sorted++;
        }
    };
    CArray.prototype.selectionSort = function () {
        var nums = this.dataStore.length;
        var sorted = 0;
        var minIndex = 0;
        var min = 0;
        for (var i = 0; i < nums; i++) {
            minIndex = i;
            min = this.dataStore[minIndex];
            for (var j = sorted + 1; j < nums; j++) {
                if (this.dataStore[j] < min) {
                    minIndex = j;
                    min = this.dataStore[j];
                }
            }
            this.swap(this.dataStore, i, minIndex);
            sorted++;
        }
    };
    CArray.prototype.insertionSort = function () {
        var nums = this.dataStore.length;
        var sorted = 0;
        var temp;
        var tempIndex = 0;
        for (var i = 1; i < nums; i++) {
            temp = this.dataStore[i];
            tempIndex = i;
            for (var j = sorted; j >= 0; j--) {
                if (this.dataStore[j] > temp) {
                    this.swap(this.dataStore, j, tempIndex);
                    tempIndex = j;
                }
            }
            sorted++;
        }
    };
    return CArray;
}());
exports.CArray = CArray;
