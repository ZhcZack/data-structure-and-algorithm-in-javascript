"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Set = /** @class */ (function () {
    function Set() {
        this.datastore = [];
    }
    Set.prototype.add = function (data) {
        if (this.datastore.indexOf(data) < 0) {
            this.datastore.push(data);
            return true;
        }
        return false;
    };
    Set.prototype.remove = function (data) {
        var pos = this.datastore.indexOf(data);
        if (pos > -1) {
            this.datastore.splice(pos, 1);
            return true;
        }
        return false;
    };
    Set.prototype.show = function () {
        return this.datastore.join(',');
    };
    Set.prototype.contains = function (data) {
        if (this.datastore.indexOf(data) < 0) {
            return false;
        }
        return true;
    };
    Set.prototype.union = function (set) {
        var tempSet = new Set();
        for (var i = 0; i < this.datastore.length; i++) {
            tempSet.add(this.datastore[i]);
        }
        for (var i = 0; i < set.datastore.length; i++) {
            if (!tempSet.contains(set.datastore[i])) {
                tempSet.add(set.datastore[i]);
            }
        }
        return tempSet;
    };
    Set.prototype.intersect = function (set) {
        var tempSet = new Set();
        for (var i = 0; i < this.datastore.length; i++) {
            if (set.contains(this.datastore[i])) {
                tempSet.add(this.datastore[i]);
            }
        }
        return tempSet;
    };
    Object.defineProperty(Set.prototype, "size", {
        get: function () {
            return this.datastore.length;
        },
        enumerable: true,
        configurable: true
    });
    Set.prototype.subset = function (set) {
        if (this.size > set.size) {
            return false;
        }
        for (var i = 0; i < this.size; i++) {
            if (!set.contains(this.datastore[i])) {
                return false;
            }
        }
        return true;
    };
    Set.prototype.difference = function (set) {
        var tempSet = new Set();
        for (var i = 0; i < this.size; i++) {
            if (!set.contains(this.datastore[i])) {
                tempSet.add(this.datastore[i]);
            }
        }
        return tempSet;
    };
    return Set;
}());
exports.Set = Set;
