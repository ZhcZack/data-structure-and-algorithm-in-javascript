import * as lib from './util';
import { Queue, Deque } from './queue';

function test1() {
    let q = new Queue<string>();
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
    let dq = new Deque<string>();
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

function isPalidromeWithDeque(word: string): boolean {
    let dq1 = new Deque<string>();
    let dq2 = new Deque<string>();

    for (let w of word) {
        dq1.enqueue(w);
        dq2.append(w);
    }

    while (!dq1.isEmpty && !dq2.isEmpty) {
        let v1 = dq1.dequeue();
        let v2 = dq2.dequeue();
        if (v1 !== v2) {
            return false;
        }
        // lib.log(v1, v2);
    }
    return true;
}

function test2() {
    let word = 'hello world';
    lib.assertEqual(isPalidromeWithDeque(word), false);
    lib.assertNotEqual(isPalidromeWithDeque(word), true);

    word = 'abcdefedcba';
    lib.assertEqual(isPalidromeWithDeque(word), true);
}
lib.doTest(test2);