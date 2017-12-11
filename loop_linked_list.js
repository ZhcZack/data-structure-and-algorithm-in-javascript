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
var LoopLinkedList = /** @class */ (function (_super) {
    __extends(LoopLinkedList, _super);
    function LoopLinkedList() {
        return _super.call(this) || this;
    }
    LoopLinkedList.prototype.insert = function (newElement, item) {
        if (item === void 0) { item = null; }
        var newNode = new node_1.Node(newElement);
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
    LoopLinkedList.prototype.display = function () {
        var result = [];
        var currNode = this.head;
        do {
            if (currNode.element !== null) {
                result.push(currNode.element);
            }
            currNode = currNode.next;
        } while (currNode !== null && currNode.element !== null && currNode.next !== null);
        return result.join(',');
    };
    return LoopLinkedList;
}(linked_list_1.LinkedList));
exports.LoopLinkedList = LoopLinkedList;
