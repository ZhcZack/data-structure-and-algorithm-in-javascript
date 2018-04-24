import { ZStack } from './stack';
import * as lib from './util';

const test1 = () => {
    const s = new ZStack<string>();
    s.push('David');
    s.push('Raymond');
    s.push('Bryan');

    lib.assertEqual(s.length, 3);
    lib.assertEqual(s.peek(), 'Bryan');

    let popped = s.pop();
    lib.assertEqual(s.peek(), 'Raymond');

    s.push('Cynthia');
    lib.assertEqual(s.peek(), 'Cynthia');

    s.clear();
    lib.assertEqual(s.length, 0);
    lib.assertEqual(s.peek(), undefined);
    s.push('Clayton');
    lib.assertEqual(s.peek(), 'Clayton');
}

lib.doTest(test1);

function mulBase(num: number, base: number): string {
    let s = new ZStack<number>();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let converted = '';
    while (s.length > 0) {
        let n = s.pop();
        converted += (n !== null ? String(n) : '');
    }
    return converted;
}

const test2 = () => {
    let num = 32;
    let base = 2;
    let newNum = mulBase(32, 2);
    lib.log(newNum);
}
lib.doTest(test2);

function isPalindrome(word: string): boolean {
    let s = new ZStack<string>();
    for (let w of word) {
        s.push(w);
    }
    let rword = '';
    while (s.length > 0) {
        let p = s.pop();
        rword += p !== null ? p : '';
    }
    // lib.log(`word: ${word}, rword: ${rword}`);
    if (word === rword) {
        return true;
    }
    return false;
}

const test3 = () => {
    let word = 'hello';
    lib.assertEqual(isPalindrome(word), true);
    word = 'racecar';
    lib.assertEqual(isPalindrome(word), true);
}
lib.doTest(test3);

function fact(n: number): number {
    let s = new ZStack<number>();
    while (n > 1) {
        s.push(n);
        n--;
    }
    let product = 1;
    while (s.length > 0) {
        let p = s.pop();
        product *= p !== null ? p : 1;
    }
    return product;
}
const test4 = () => {
    lib.assertEqual(fact(5), 120);
    lib.assertNotEqual(fact(3), 3);
}
lib.doTest(test4);