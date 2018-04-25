"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var double_linked_list_1 = require("./double_linked_list");
var lib = require("./util");
function test1() {
    var cities = new double_linked_list_1.DoubleLinkedList();
    cities.insertAfter('Conway');
    cities.insertAfter('Russellville', 'Conway');
    cities.insertAfter('Carlisle', 'Russellville');
    cities.insertAfter('Alma', 'Carlisle');
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Carlisle,Alma');
    cities.remove('Carlisle');
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Alma');
    lib.assertEqual(cities.reverseWalkThrough(), 'Alma,Russellville,Conway');
}
lib.doTest(test1);
function test2() {
    var cities = new double_linked_list_1.DoubleLinkedList();
    cities.insertAfter('Conway');
    cities.insertAfter('Russellville', 'Conway');
    cities.insertAfter('Carlisle', 'Russellville');
    cities.insertAfter('Alma', 'Carlisle');
    cities.advance(1);
    cities.back(1);
    lib.assertEqual(cities.show(), 'HEAD');
}
lib.doTest(test2);
