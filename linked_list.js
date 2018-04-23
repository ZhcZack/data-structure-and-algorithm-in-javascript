"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LLNode = /** @class */ (function () {
    function LLNode(element, next, prev) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
    return LLNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = new LLNode();
        this.nowNode = this.head;
    }
    LinkedList.prototype.find = function (item) {
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
            if (currentNode.element === item) {
                return currentNode;
            }
        }
        return null;
    };
    LinkedList.prototype.findPrevious = function (item) {
        var currentNode = this.head;
        while (currentNode.next && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.remove = function (item) {
        var prevNode = this.findPrevious(item);
        if (prevNode.next) {
            prevNode.next = prevNode.next.next;
        }
    };
    LinkedList.prototype.insertAfter = function (newElement, item) {
        if (item === void 0) { item = undefined; }
        var newNode = new LLNode(newElement);
        var current = item === undefined ? undefined : this.find(item);
        if (!current) {
            this.head.next = newNode;
        }
        else {
            newNode.next = current.next;
            current.next = newNode;
        }
    };
    // for debug
    LinkedList.prototype.walkThrough = function () {
        var result = [];
        var currentNode = this.head;
        while (currentNode.next && currentNode.next.element) {
            result.push(currentNode.next.element);
            currentNode = currentNode.next;
        }
        return result.join(',');
    };
    LinkedList.prototype.advance = function (n) {
        while (n > 0) {
            if (this.nowNode.next) {
                this.nowNode = this.nowNode.next;
            }
            n--;
        }
    };
    LinkedList.prototype.show = function () {
        if (this.nowNode.element) {
            return String(this.nowNode.element);
        }
        return 'HEAD';
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
