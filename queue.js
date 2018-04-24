"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZQueue = /** @class */ (function () {
    function ZQueue() {
        this.datas = [];
    }
    Object.defineProperty(ZQueue.prototype, "size", {
        get: function () {
            return this.datas.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZQueue.prototype, "empty", {
        get: function () {
            return this.size <= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZQueue.prototype, "front", {
        get: function () {
            return this.datas.shift();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZQueue.prototype, "back", {
        get: function () {
            return this.datas.pop();
        },
        enumerable: true,
        configurable: true
    });
    // for debug
    ZQueue.prototype.toString = function () {
        return this.datas.join(',');
    };
    ZQueue.prototype.enqueue = function (element) {
        this.datas.push(element);
    };
    ZQueue.prototype.dequeue = function () {
        return this.front;
    };
    return ZQueue;
}());
exports.ZQueue = ZQueue;
var ZDeque = /** @class */ (function () {
    function ZDeque() {
        this.datas = [];
    }
    Object.defineProperty(ZDeque.prototype, "size", {
        get: function () {
            return this.datas.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZDeque.prototype, "empty", {
        get: function () {
            return this.size <= 0;
        },
        enumerable: true,
        configurable: true
    });
    // for debug
    ZDeque.prototype.toString = function () {
        return this.datas.join(',');
    };
    ZDeque.prototype.enqueue = function (element) {
        this.datas.unshift(element);
    };
    ZDeque.prototype.dequeue = function () {
        return this.datas.shift();
    };
    ZDeque.prototype.append = function (element) {
        this.datas.push(element);
    };
    ZDeque.prototype.pop = function () {
        return this.datas.pop();
    };
    return ZDeque;
}());
exports.ZDeque = ZDeque;
