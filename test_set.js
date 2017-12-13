"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_1 = require("./set");
var lib = require("./util");
function test1() {
    var names = new set_1.Set();
    names.add('David');
    names.add('Jennifer');
    names.add('Cynthia');
    names.add('Mike');
    lib.assertEqual(names.show(), 'David,Jennifer,Cynthia,Mike');
    names.remove('Jennifer');
    lib.assertEqual(names.show(), 'David,Cynthia,Mike');
    names.remove('hello');
    lib.assertEqual(names.show(), 'David,Cynthia,Mike');
}
lib.doTest(test1);
function unionTest() {
    var cis = new set_1.Set();
    cis.add('Mike');
    cis.add('Clayton');
    var dmp = new set_1.Set();
    dmp.add('Cynthia');
    var it = cis.union(dmp);
    lib.assertEqual(it.show(), 'Mike,Clayton,Cynthia');
}
lib.doTest(unionTest);
function intersectTest() {
    var cis = new set_1.Set();
    cis.add('hi');
    cis.add('hey');
    cis.add('hello');
    var b = new set_1.Set();
    b.add('hi');
    lib.assertEqual(cis.intersect(b).show(), 'hi');
    var c = new set_1.Set();
    lib.assertEqual(cis.intersect(c).show(), '');
}
lib.doTest(intersectTest);
function subsetTest() {
    var it = new set_1.Set();
    it.add('Cynthia');
    var her = new set_1.Set();
    her.add('Cynthia');
    her.add('hi');
    var him = new set_1.Set();
    him.add('hi');
    lib.assertEqual(it.subset(her), true);
    lib.assertEqual(it.subset(him), false);
    lib.assertEqual(him.subset(her), true);
}
lib.doTest(subsetTest);
