"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(element, next, previous) {
        if (element === void 0) { element = null; }
        if (next === void 0) { next = null; }
        if (previous === void 0) { previous = null; }
        this.element = element;
        this.next = next;
        this.previous = previous;
    }
    return Node;
}());
exports.Node = Node;
