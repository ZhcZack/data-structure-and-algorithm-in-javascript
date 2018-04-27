"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var merge_sort_1 = require("./merge-sort");
function test() {
    var array = util_1.randomArray();
    util_1.log(array);
    array = merge_sort_1.mergeSort(array);
    util_1.log(array);
}
test();
