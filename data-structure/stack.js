"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZStack = /** @class */ (function () {
    function ZStack() {
        this.elements = [];
    }
    Object.defineProperty(ZStack.prototype, "length", {
        get: function () {
            return this.elements.length;
        },
        enumerable: true,
        configurable: true
    });
    ZStack.prototype.push = function (element) {
        this.elements.push(element);
    };
    ZStack.prototype.peek = function () {
        return this.elements[this.length - 1];
    };
    ZStack.prototype.pop = function () {
        return this.length <= 0 ? null : this.elements.pop();
    };
    ZStack.prototype.clear = function () {
        this.elements = [];
    };
    return ZStack;
}());
exports.ZStack = ZStack;
