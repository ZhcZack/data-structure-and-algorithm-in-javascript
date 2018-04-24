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
var DLNode = /** @class */ (function () {
    function DLNode(element, next, prev) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
    return DLNode;
}());
var DoubleLinkedList = /** @class */ (function (_super) {
    __extends(DoubleLinkedList, _super);
    function DoubleLinkedList() {
        var _this = _super.call(this) || this;
        _this.head = new DLNode();
        return _this;
    }
    DoubleLinkedList.prototype.find = function (item) {
        var currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
            if (currNode.element === item) {
                return currNode;
            }
        }
        return null;
    };
    DoubleLinkedList.prototype.findLast = function () {
        var currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        return currNode;
    };
    DoubleLinkedList.prototype.reverseWalkThrough = function () {
        var result = [];
        var currNode = this.findLast();
        while (currNode.prev) {
            if (currNode.element) {
                result.push(currNode.element);
            }
            currNode = currNode.prev;
        }
        return result.join(',');
    };
    DoubleLinkedList.prototype.insertAfter = function (newElement, item) {
        if (item === void 0) { item = undefined; }
        // 链表这么可怕的嘛……
        var newNode = new DLNode(newElement);
        if (!item) {
            this.head.next = newNode;
            newNode.prev = this.head;
        }
        else {
            var currNode = this.find(item);
            if (currNode) {
                newNode.next = currNode.next;
                currNode.next = newNode;
                newNode.prev = currNode;
                if (newNode.next) {
                    newNode.next.prev = newNode;
                }
            }
        }
    };
    DoubleLinkedList.prototype.remove = function (item) {
        var currNode = this.find(item);
        if (currNode) {
            if (!currNode.next) {
                if (currNode.prev) {
                    currNode.prev.next = undefined;
                }
                currNode.prev = undefined;
            }
            else {
                if (currNode.prev) {
                    currNode.prev.next = currNode.next;
                }
                currNode.next.prev = currNode.prev;
                currNode.next = undefined;
                currNode.prev = undefined;
            }
        }
    };
    DoubleLinkedList.prototype.back = function (n) {
        while (n > 0) {
            if (this.nowNode.prev) {
                this.nowNode = this.nowNode.prev;
            }
            n--;
        }
    };
    return DoubleLinkedList;
}(linked_list_1.LinkedList));
exports.DoubleLinkedList = DoubleLinkedList;
