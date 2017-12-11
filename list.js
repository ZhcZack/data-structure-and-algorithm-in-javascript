"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        this.pos = 0;
        this.listSize = 0;
        this.dataStore = [];
    }
    List.prototype.append = function (element) {
        this.dataStore.push(element);
        this.listSize++;
    };
    List.prototype.find = function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    };
    List.prototype.remove = function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    };
    List.prototype.toString = function () {
        return String(this.dataStore);
    };
    List.prototype.insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    };
    List.prototype.clear = function () {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };
    List.prototype.contains = function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    };
    List.prototype.front = function () {
        this.pos = 0;
    };
    List.prototype.end = function () {
        this.pos = this.listSize - 1;
    };
    List.prototype.prev = function () {
        if (this.pos > -1) {
            this.pos--;
        }
    };
    List.prototype.next = function () {
        if (this.pos < this.listSize) {
            this.pos++;
        }
    };
    Object.defineProperty(List.prototype, "currPos", {
        get: function () {
            return this.pos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "element", {
        get: function () {
            return this.dataStore[this.pos];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            return this.listSize;
        },
        enumerable: true,
        configurable: true
    });
    return List;
}());
exports.List = List;
