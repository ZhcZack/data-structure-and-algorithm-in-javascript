"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * max) + min;
}
exports.randomNumber = randomNumber;
function log(msg) {
    console.log(msg);
}
exports.log = log;
function randomArray() {
    var count = randomNumber(5, 20);
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(randomNumber(1, 100));
    }
    return result;
}
exports.randomArray = randomArray;
