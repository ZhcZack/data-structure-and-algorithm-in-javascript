"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_1 = require("./set");
var lib = require("./util");
function test1() {
    var names = new set_1.ZSet();
    names.add('David');
    names.add('Jennifer');
    names.add('Cynthia');
    names.add('Mike');
    lib.assertEqual(names.display(), 'David,Jennifer,Cynthia,Mike');
    names.delete('Jennifer');
    lib.assertEqual(names.display(), 'David,Cynthia,Mike');
    names.delete('hello');
    lib.assertEqual(names.display(), 'David,Cynthia,Mike');
}
lib.doTest(test1);
function unionTest() {
    var cis = new set_1.ZSet();
    cis.add('Mike');
    cis.add('Clayton');
    var dmp = new set_1.ZSet();
    dmp.add('Cynthia');
    var it = cis.union(dmp);
    lib.assertEqual(it.display(), 'Mike,Clayton,Cynthia');
}
lib.doTest(unionTest);
function intersectTest() {
    var cis = new set_1.ZSet();
    cis.add('hi');
    cis.add('hey');
    cis.add('hello');
    var b = new set_1.ZSet();
    b.add('hi');
    lib.assertEqual(cis.intersect(b).display(), 'hi');
    var c = new set_1.ZSet();
    lib.assertEqual(cis.intersect(c).display(), '');
}
lib.doTest(intersectTest);
function subsetTest() {
    var it = new set_1.ZSet();
    it.add('Cynthia');
    var her = new set_1.ZSet();
    her.add('Cynthia');
    her.add('hi');
    var him = new set_1.ZSet();
    him.add('hi');
    lib.assertEqual(it.isSubsetOf(her), true);
    lib.assertEqual(it.isSubsetOf(him), false);
    lib.assertEqual(him.isSubsetOf(her), true);
}
lib.doTest(subsetTest);
