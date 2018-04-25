"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loop_linked_list_1 = require("./loop_linked_list");
var lib = require("./util");
function test1() {
    var cities = new loop_linked_list_1.LoopLinkedList();
    cities.insertAfter('bj');
    cities.insertAfter('sh', 'bj');
    cities.insertAfter('gz', 'sh');
    cities.insertAfter('sz', 'gz');
    lib.log(cities.walkThrough());
    lib.assertEqual(cities.walkThrough(), 'bj,sh,gz,sz');
}
lib.doTest(test1);
