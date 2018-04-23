"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = require("./linked_list");
var LLLNode = /** @class */ (function () {
    function LLLNode(element, next, prev) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
    return LLLNode;
}());
var LoopLinkedList = /** @class */ (function (_super) {
    __extends(LoopLinkedList, _super);
    function LoopLinkedList() {
        return _super.call(this) || this;
    }
    LoopLinkedList.prototype.insertAfter = function (newElement, item) {
        if (item === void 0) { item = null; }
        var newNode = new LLLNode(newElement);
        var current = item === null ? null : this.find(item);
        if (current === null) {
            this.head.next = newNode;
            newNode.next = this.head;
        }
        else {
            newNode.next = current.next;
            current.next = newNode;
        }
    };
    return LoopLinkedList;
}(linked_list_1.LinkedList));
exports.LoopLinkedList = LoopLinkedList;
