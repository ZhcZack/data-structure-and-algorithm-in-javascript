"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.dataScore = [];
        this.top = 0;
    }
    Stack.prototype.push = function (element) {
        this.dataScore[this.top] = element;
        this.top++;
    };
    Stack.prototype.peek = function () {
        return this.dataScore[this.top - 1];
    };
    Stack.prototype.pop = function () {
        this.top--;
        return this.top >= 0 ? this.dataScore[this.top] : null;
    };
    Stack.prototype.clear = function () {
        this.top = 0;
    };
    Object.defineProperty(Stack.prototype, "length", {
        get: function () {
            return this.top;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
exports.Stack = Stack;
