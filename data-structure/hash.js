"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZHash = /** @class */ (function () {
    function ZHash() {
        this.tables = [];
        for (var i = 0; i < 13; i++) {
            this.tables.push([]);
        }
    }
    ZHash.prototype.insert = function (value) {
        if (Array.isArray(value)) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var v = value_1[_i];
                var index = fakeHash(v);
                this.tables[index].push(v);
            }
        }
        else {
            var index = fakeHash(value);
            this.tables[index].push(value);
        }
    };
    ZHash.prototype.remove = function (value) {
        if (!this.search(value)) {
            return;
        }
        var index = fakeHash(value);
        for (var i = 0; i < this.tables[index].length; i++) {
            if (this.tables[index][i] === value) {
                this.tables[index].splice(i, 1);
                return;
            }
        }
    };
    ZHash.prototype.search = function (value) {
        var index = fakeHash(value);
        for (var _i = 0, _a = this.tables[index]; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v === value) {
                return true;
            }
        }
        return false;
    };
    // for debug
    ZHash.prototype.display = function () {
        var result = [];
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            for (var _b = 0, table_1 = table; _b < table_1.length; _b++) {
                var value = table_1[_b];
                result.push(value);
            }
        }
        return result;
    };
    return ZHash;
}());
exports.ZHash = ZHash;
function fakeHash(hashValue) {
    var result = 0;
    if (typeof hashValue === 'string') {
        var finalCode = 0;
        for (var _i = 0, hashValue_1 = hashValue; _i < hashValue_1.length; _i++) {
            var char = hashValue_1[_i];
            finalCode += char.charCodeAt(0);
        }
        result = finalCode % 13;
    }
    else if (typeof hashValue === 'number') {
        result = result % 13;
    }
    return result;
}
