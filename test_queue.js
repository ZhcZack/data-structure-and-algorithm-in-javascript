"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("./util");
var queue_1 = require("./queue");
function test1() {
    var q = new queue_1.Queue();
    q.enqueue('Meredith');
    q.enqueue('Cynthia');
    q.enqueue('Jennifer');
    // lib.log(q.toString());
    lib.assertEqual(q.toString(), 'Meredith\nCynthia\nJennifer\n');
    q.dequeue();
    lib.assertEqual(q.toString(), 'Cynthia\nJennifer\n');
    lib.assertEqual(q.front, 'Cynthia');
    lib.assertEqual(q.back, 'Jennifer');
}
lib.doTest(test1);
function dequeTest() {
    var dq = new queue_1.Deque();
    dq.append('hi');
    dq.append('hey');
    dq.enqueue('hello');
    lib.assertEqual(dq.toString(), 'hello,hi,hey');
    dq.pop();
    lib.assertEqual(dq.toString(), 'hello,hi');
    dq.enqueue('girl');
    lib.assertEqual(dq.toString(), 'girl,hello,hi');
    dq.dequeue();
    lib.assertEqual(dq.toString(), 'hello,hi');
}
lib.doTest(dequeTest);
function isPalidromeWithDeque(word) {
    var dq1 = new queue_1.Deque();
    var dq2 = new queue_1.Deque();
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var w = word_1[_i];
        dq1.enqueue(w);
        dq2.append(w);
    }
    while (!dq1.isEmpty && !dq2.isEmpty) {
        var v1 = dq1.dequeue();
        var v2 = dq2.dequeue();
        if (v1 !== v2) {
            return false;
        }
        // lib.log(v1, v2);
    }
    return true;
}
function test2() {
    var word = 'hello world';
    lib.assertEqual(isPalidromeWithDeque(word), false);
    lib.assertNotEqual(isPalidromeWithDeque(word), true);
    word = 'abcdefedcba';
    lib.assertEqual(isPalidromeWithDeque(word), true);
}
lib.doTest(test2);
