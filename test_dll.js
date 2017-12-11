"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var double_linked_list_1 = require("./double_linked_list");
var lib = require("./util");
function test1() {
    var cities = new double_linked_list_1.DoubleLinkedList();
    cities.insert('Conway');
    cities.insert('Russellville', 'Conway');
    cities.insert('Carlisle', 'Russellville');
    cities.insert('Alma', 'Carlisle');
    lib.assertEqual(cities.display(), 'Conway,Russellville,Carlisle,Alma');
    cities.remove('Carlisle');
    lib.assertEqual(cities.display(), 'Conway,Russellville,Alma');
    lib.assertEqual(cities.displayReverse(), 'Alma,Russellville,Conway');
}
lib.doTest(test1);
function test2() {
    var cities = new double_linked_list_1.DoubleLinkedList();
    cities.insert('Conway');
    cities.insert('Russellville', 'Conway');
    cities.insert('Carlisle', 'Russellville');
    cities.insert('Alma', 'Carlisle');
    cities.advance(1);
    cities.back(1);
    lib.assertEqual(cities.show(), 'HEAD');
}
lib.doTest(test2);
