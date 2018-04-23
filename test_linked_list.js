"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = require("./linked_list");
var lib = require("./util");
function test1() {
    var cities = new linked_list_1.LinkedList();
    cities.insertAfter('Conway');
    cities.insertAfter('Russellville', 'Conway');
    cities.insertAfter('Alma', 'Russellville');
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Alma');
}
lib.doTest(test1);
function test2() {
    var cities = new linked_list_1.LinkedList();
    cities.insertAfter('Conway');
    cities.insertAfter('Russellville', 'Conway');
    cities.insertAfter('Carlisle', 'Russellville');
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville,Carlisle');
    cities.remove('Carlisle');
    lib.assertEqual(cities.walkThrough(), 'Conway,Russellville');
}
lib.doTest(test2);
function test3() {
    var cities = new linked_list_1.LinkedList();
    cities.insertAfter('bj');
    cities.insertAfter('sh', 'bj');
    cities.insertAfter('gz', 'sh');
    cities.advance(1);
    lib.assertEqual(cities.show(), 'bj');
    cities.advance(10);
    lib.assertEqual(cities.show(), 'gz');
}
lib.doTest(test3);
