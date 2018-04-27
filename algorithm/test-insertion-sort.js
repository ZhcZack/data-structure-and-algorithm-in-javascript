"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var insertion_sort_1 = require("./insertion-sort");
function test() {
    var array = util_1.randomArray();
    util_1.log(array);
    insertion_sort_1.insertionSort(array);
    util_1.log(array);
}
test();
