"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZSet = /** @class */ (function () {
    function ZSet() {
        this.datas = [];
    }
    // for debug
    ZSet.prototype.display = function () {
        return this.datas.join(',');
    };
    Object.defineProperty(ZSet.prototype, "size", {
        get: function () {
            return this.datas.length;
        },
        enumerable: true,
        configurable: true
    });
    ZSet.prototype.add = function (value) {
        if (this.has(value)) {
            return;
        }
        this.datas.push(value);
    };
    ZSet.prototype.clear = function () {
        this.datas = [];
    };
    ZSet.prototype.delete = function (value) {
        if (!this.has(value)) {
            return false;
        }
        for (var i = 0; i < this.datas.length; i++) {
            if (this.datas[i] === value) {
                this.datas.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    ZSet.prototype.forEach = function (callback) {
        for (var _i = 0, _a = this.datas; _i < _a.length; _i++) {
            var data = _a[_i];
            callback(data);
        }
    };
    ZSet.prototype.has = function (value) {
        for (var _i = 0, _a = this.datas; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data === value) {
                return true;
            }
        }
        return false;
    };
    ZSet.prototype.union = function (set) {
        var newSet = new ZSet();
        this.forEach(function (value) {
            newSet.add(value);
        });
        set.forEach(function (value) {
            newSet.add(value);
        });
        return newSet;
    };
    ZSet.prototype.intersect = function (set) {
        var newSet = new ZSet();
        this.forEach(function (value) {
            if (set.has(value)) {
                newSet.add(value);
            }
        });
        return newSet;
    };
    ZSet.prototype.isSubsetOf = function (set) {
        var result = true;
        if (this.size > set.size) {
            result = false;
            return result;
        }
        this.forEach(function (value) {
            if (!set.has(value)) {
                result = false;
            }
        });
        return result;
    };
    return ZSet;
}());
exports.ZSet = ZSet;
