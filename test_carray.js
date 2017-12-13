"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carray_1 = require("./carray");
var lib = require("./util");
function test1() {
    var myNums = new carray_1.CArray(100);
    myNums.setData();
    lib.log(myNums.toString());
}
// lib.doTest(test1)
function bubbleSortTest() {
    var nums = new carray_1.CArray(100);
    nums.setData();
    nums.bubbleSort();
    lib.log(nums.toString());
}
// lib.doTest(bubbleSortTest)
function selectionSortTest() {
    var nums = new carray_1.CArray(100);
    nums.setData();
    nums.selectionSort();
    lib.log(nums.toString());
}
// lib.doTest(selectionSortTest)
function insertionSortTest() {
    var nums = new carray_1.CArray(100);
    nums.setData();
    nums.insertionSort();
    lib.log(nums.toString());
}
// lib.doTest(insertionSortTest)
function sortTimeCheck(numbers) {
    lib.log('sort numbers: ' + numbers);
    var nums = new carray_1.CArray(numbers);
    lib.calcTime(function () {
        nums.bubbleSort();
    }, 'bubble sort');
    nums.reset();
    lib.calcTime(function () {
        nums.selectionSort();
    }, 'selection sort');
    nums.reset();
    lib.calcTime(function () {
        nums.insertionSort();
    }, 'insertion sort');
}
lib.doTest(function () {
    sortTimeCheck(100);
    sortTimeCheck(1000);
    sortTimeCheck(10000);
    sortTimeCheck(100000);
});
