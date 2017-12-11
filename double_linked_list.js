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
var node_1 = require("./node");
var DoubleLinkedList = /** @class */ (function (_super) {
    __extends(DoubleLinkedList, _super);
    function DoubleLinkedList() {
        return _super.call(this) || this;
    }
    DoubleLinkedList.prototype.find = function (item) {
        var currNode = this.head;
        while (currNode !== null && currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    DoubleLinkedList.prototype.findLast = function () {
        var currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    };
    DoubleLinkedList.prototype.displayReverse = function () {
        var result = [];
        var currNode = this.findLast();
        while (currNode.previous !== null) {
            if (currNode.element !== null) {
                result.push(currNode.element);
            }
            currNode = currNode.previous;
        }
        return result.join(',');
    };
    DoubleLinkedList.prototype.insert = function (newElement, item) {
        if (item === void 0) { item = null; }
        // 链表这么可怕的嘛……
        var newNode = new node_1.Node(newElement);
        if (item === null) {
            this.head.next = newNode;
            newNode.previous = this.head;
        }
        else {
            var currNode = this.find(item);
            if (currNode !== null) {
                newNode.next = currNode.next;
                currNode.next = newNode;
                newNode.previous = currNode;
                if (newNode.next !== null) {
                    newNode.next.previous = newNode;
                }
            }
        }
    };
    DoubleLinkedList.prototype.remove = function (item) {
        var currNode = this.find(item);
        if (currNode !== null) {
            if (currNode.next === null) {
                if (currNode.previous !== null) {
                    currNode.previous.next = null;
                }
                currNode.previous = null;
            }
            else {
                if (currNode.previous !== null) {
                    currNode.previous.next = currNode.next;
                }
                currNode.next.previous = currNode.previous;
                currNode.next = null;
                currNode.previous = null;
            }
        }
    };
    DoubleLinkedList.prototype.back = function (n) {
        while (n > 0) {
            if (this.nowNode.previous !== null) {
                this.nowNode = this.nowNode.previous;
            }
            n--;
        }
    };
    return DoubleLinkedList;
}(linked_list_1.LinkedList));
exports.DoubleLinkedList = DoubleLinkedList;
