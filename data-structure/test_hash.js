"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hash_1 = require("./hash");
var util_1 = require("./util");
function test() {
    var table = new hash_1.ZHash();
    table.insert([10, 11, 12, 13]);
    table.insert([0, 1, 2, 3]);
    util_1.log(table.search(10));
    util_1.log(table.search(9));
    table.insert(['1', '2', '3']);
    // assertEqual(table.display().toString(), '10,11,12,13')
    util_1.log(table.display());
}
test();
