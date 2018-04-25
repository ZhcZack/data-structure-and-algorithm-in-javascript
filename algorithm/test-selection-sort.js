"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var selection_sort_1 = require("./selection-sort");
function test() {
    var array = util_1.randomArray();
    util_1.log(array);
    selection_sort_1.selectionSort(array);
    util_1.log(array);
}
test();
