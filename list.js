"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZList = /** @class */ (function () {
    function ZList() {
        this.elements = [];
        this.index = 0;
    }
    Object.defineProperty(ZList.prototype, "length", {
        get: function () {
            return this.elements.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZList.prototype, "element", {
        get: function () {
            return this.elements[this.index];
        },
        enumerable: true,
        configurable: true
    });
    ZList.prototype.front = function () {
        this.index = 0;
    };
    ZList.prototype.next = function () {
        this.index += 1;
        if (this.index >= this.length) {
            this.index = this.length - 1;
        }
    };
    ZList.prototype.prev = function () {
        this.index -= 1;
        if (this.index <= 0) {
            this.index = 0;
        }
    };
    ZList.prototype.append = function (element) {
        this.elements.push(element);
    };
    ZList.prototype.remove = function (element) {
        var result = this.contains(element);
        if (!result) {
            return false;
        }
        for (var i = 0; i < this.length; i++) {
            if (this.elements[i] === element) {
                this.elements.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    ZList.prototype.clear = function () {
        this.elements = [];
        this.index = 0;
    };
    ZList.prototype.contains = function (element) {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var el = _a[_i];
            if (element === el) {
                return true;
            }
        }
        return false;
    };
    ZList.prototype.toString = function () {
        return this.elements.join(',');
    };
    return ZList;
}());
exports.ZList = ZList;
