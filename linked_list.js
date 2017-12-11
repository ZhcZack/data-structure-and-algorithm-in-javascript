"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = new node_1.Node();
        this.nowNode = this.head;
    }
    LinkedList.prototype.find = function (item) {
        var currentNode = this.head;
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.findPrevious = function (item) {
        var currentNode = this.head;
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.remove = function (item) {
        var prevNode = this.findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    };
    LinkedList.prototype.insert = function (newElement, item) {
        if (item === void 0) { item = null; }
        var newNode = new node_1.Node(newElement);
        var current = item === null ? null : this.find(item);
        if (current === null) {
            this.head.next = newNode;
        }
        else {
            newNode.next = current.next;
            current.next = newNode;
        }
    };
    LinkedList.prototype.display = function () {
        var result = [];
        var currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.next.element !== null) {
                result.push(currentNode.next.element);
            }
            currentNode = currentNode.next;
        }
        return result.join(',');
    };
    LinkedList.prototype.advance = function (n) {
        while (n > 0) {
            if (this.nowNode.next !== null) {
                this.nowNode = this.nowNode.next;
            }
            n--;
        }
    };
    LinkedList.prototype.show = function () {
        return this.nowNode.element !== null ? this.nowNode.element : 'HEAD';
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
