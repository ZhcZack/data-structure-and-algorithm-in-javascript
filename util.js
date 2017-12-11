"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = console.log.bind(console);
function assertEqual(message, wanted) {
    if (message === wanted) {
        exports.log('pass');
    }
    else {
        exports.log('fail');
    }
}
exports.assertEqual = assertEqual;
function assertNotEqual(message, wanted) {
    if (message !== wanted) {
        exports.log('pass');
    }
    else {
        exports.log('fail');
    }
}
exports.assertNotEqual = assertNotEqual;
function getFunctionName(func) {
    var literial = func.toString();
    literial = literial.substr('function '.length);
    literial = literial.substr(0, literial.indexOf('('));
    return literial;
}
function doTest(testFunc) {
    exports.log('*** test start ***');
    testFunc();
    exports.log('*** test end ***\n');
}
exports.doTest = doTest;
