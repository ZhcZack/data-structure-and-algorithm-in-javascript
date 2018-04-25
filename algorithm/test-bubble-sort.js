"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_sort_1 = require("./bubble-sort");
var util_1 = require("./util");
function test() {
    var array = util_1.randomArray();
    util_1.log(array);
    bubble_sort_1.bubbleSort(array);
    util_1.log(array);
}
test();
