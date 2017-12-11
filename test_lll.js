"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loop_linked_list_1 = require("./loop_linked_list");
var lib = require("./util");
function test1() {
    var cities = new loop_linked_list_1.LoopLinkedList();
    cities.insert('bj');
    cities.insert('sh', 'bj');
    cities.insert('gz', 'sh');
    cities.insert('sz', 'gz');
    lib.log(cities.display());
    lib.assertEqual(cities.display(), 'bj,sh,gz,sz');
}
lib.doTest(test1);
