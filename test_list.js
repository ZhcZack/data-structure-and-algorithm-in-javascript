"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var util = require("./util");
function test1() {
    var names = new list_1.ZList();
    names.append('Cynthia');
    names.append('Raymond');
    names.append('Barbara');
    util.assertEqual(names.toString(), 'Cynthia,Raymond,Barbara');
    names.remove('Raymond');
    util.assertEqual(names.toString(), 'Cynthia,Barbara');
}
test1();
function test2() {
    var names = new list_1.ZList();
    names.append("Clayton");
    names.append("Raymond");
    names.append("Cynthia");
    names.append("Jennifer");
    names.append("Bryan");
    names.append("Danny");
    names.front();
    util.assertEqual(names.element, 'Clayton');
    names.next();
    util.assertEqual(names.element, 'Raymond');
    names.next();
    names.next();
    names.prev();
    util.assertEqual(names.element, 'Cynthia');
    // for (names.front(); names.currPos < names.length; names.next()) {
    //     util.log(names.element);
    // }
}
test2();
