"use strict";
// Hash什么的，js这个搞不明白……
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("./util");
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = new Array(137);
    }
    HashTable.prototype.put = function (data) {
        var pos = this.betterHash(data);
        this.table[pos] = data;
    };
    HashTable.prototype.simpleHash = function (data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    };
    HashTable.prototype.betterHash = function (data) {
        var H = 37;
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(String(total), 10);
    };
    HashTable.prototype.showDistro = function () {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                lib.log(i + ': ' + this.table[i]);
            }
        }
    };
    return HashTable;
}());
exports.HashTable = HashTable;
