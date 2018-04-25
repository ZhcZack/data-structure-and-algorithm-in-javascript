"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var lib = require("./util");
var test1 = function () {
    var s = new stack_1.ZStack();
    s.push('David');
    s.push('Raymond');
    s.push('Bryan');
    lib.assertEqual(s.length, 3);
    lib.assertEqual(s.peek(), 'Bryan');
    var popped = s.pop();
    lib.assertEqual(s.peek(), 'Raymond');
    s.push('Cynthia');
    lib.assertEqual(s.peek(), 'Cynthia');
    s.clear();
    lib.assertEqual(s.length, 0);
    lib.assertEqual(s.peek(), undefined);
    s.push('Clayton');
    lib.assertEqual(s.peek(), 'Clayton');
};
lib.doTest(test1);
function mulBase(num, base) {
    var s = new stack_1.ZStack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length > 0) {
        var n = s.pop();
        converted += (n !== null ? String(n) : '');
    }
    return converted;
}
var test2 = function () {
    var num = 32;
    var base = 2;
    var newNum = mulBase(32, 2);
    lib.log(newNum);
};
lib.doTest(test2);
function isPalindrome(word) {
    var s = new stack_1.ZStack();
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var w = word_1[_i];
        s.push(w);
    }
    var rword = '';
    while (s.length > 0) {
        var p = s.pop();
        rword += p !== null ? p : '';
    }
    // lib.log(`word: ${word}, rword: ${rword}`);
    if (word === rword) {
        return true;
    }
    return false;
}
var test3 = function () {
    var word = 'hello';
    lib.assertEqual(isPalindrome(word), true);
    word = 'racecar';
    lib.assertEqual(isPalindrome(word), true);
};
lib.doTest(test3);
function fact(n) {
    var s = new stack_1.ZStack();
    while (n > 1) {
        s.push(n);
        n--;
    }
    var product = 1;
    while (s.length > 0) {
        var p = s.pop();
        product *= p !== null ? p : 1;
    }
    return product;
}
var test4 = function () {
    lib.assertEqual(fact(5), 120);
    lib.assertNotEqual(fact(3), 3);
};
lib.doTest(test4);
