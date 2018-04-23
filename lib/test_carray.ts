import { CArray } from './carray'
import * as lib from './util'

function test1() {
    const myNums = new CArray(100)
    myNums.setData()
    lib.log(myNums.toString())
}
// lib.doTest(test1)

function bubbleSortTest() {
    const nums = new CArray(100)
    nums.setData()
    nums.bubbleSort()
    lib.log(nums.toString())
}
// lib.doTest(bubbleSortTest)

function selectionSortTest() {
    const nums = new CArray(100)
    nums.setData()
    nums.selectionSort()
    lib.log(nums.toString())
}
// lib.doTest(selectionSortTest)

function insertionSortTest() {
    const nums = new CArray(100)
    nums.setData()
    nums.insertionSort()
    lib.log(nums.toString())
}
// lib.doTest(insertionSortTest)

function sortTimeCheck(numbers: number) {
    lib.log('sort numbers: ' + numbers)
    const nums = new CArray(numbers)
    lib.calcTime(() => {
        nums.bubbleSort()
    }, 'bubble sort')
    nums.reset()
    lib.calcTime(() => {
        nums.selectionSort()
    }, 'selection sort')
    nums.reset()
    lib.calcTime(() => {
        nums.insertionSort()
    }, 'insertion sort')
}

lib.doTest(() => {
    sortTimeCheck(100)
    sortTimeCheck(1000)
    sortTimeCheck(10000)
    sortTimeCheck(100000)
})