"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.dataStore = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.dataStore.push(element);
    };
    Queue.prototype.dequeue = function () {
        return this.dataStore.shift();
    };
    Object.defineProperty(Queue.prototype, "front", {
        get: function () {
            return this.dataStore[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "back", {
        get: function () {
            return this.dataStore[this.dataStore.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.toString = function () {
        var retStr = '';
        for (var _i = 0, _a = this.dataStore; _i < _a.length; _i++) {
            var d = _a[_i];
            retStr += d + '\n';
        }
        return retStr;
    };
    Object.defineProperty(Queue.prototype, "isEmpty", {
        get: function () {
            return this.dataStore.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    return Queue;
}());
exports.Queue = Queue;
var Deque = /** @class */ (function () {
    function Deque() {
        this.dataStore = [];
    }
    Deque.prototype.append = function (element) {
        this.dataStore.push(element);
    };
    Deque.prototype.pop = function () {
        return this.dataStore.pop();
    };
    Deque.prototype.enqueue = function (element) {
        this.dataStore.unshift(element);
    };
    Deque.prototype.dequeue = function () {
        return this.dataStore.shift();
    };
    Object.defineProperty(Deque.prototype, "length", {
        get: function () {
            return this.dataStore.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deque.prototype, "isEmpty", {
        get: function () {
            return this.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Deque.prototype.toString = function () {
        return this.dataStore.join(',');
    };
    return Deque;
}());
exports.Deque = Deque;
