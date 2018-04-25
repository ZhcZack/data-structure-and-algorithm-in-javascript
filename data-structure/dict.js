"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dict = /** @class */ (function () {
    function Dict() {
        this.datastore = {};
    }
    Dict.prototype.add = function (key, value) {
        this.datastore[key] = value;
    };
    Dict.prototype.find = function (key) {
        return this.datastore[key];
    };
    Dict.prototype.remove = function (key) {
        delete this.datastore[key];
    };
    Dict.prototype.showAll = function () {
        var result = [];
        for (var key in this.datastore) {
            result.push(key + ':' + this.datastore[key]);
        }
        return result.join(',');
    };
    Object.defineProperty(Dict.prototype, "count", {
        get: function () {
            var n = 0;
            for (var key in this.datastore) {
                n++;
            }
            return n;
        },
        enumerable: true,
        configurable: true
    });
    Dict.prototype.clear = function () {
        for (var key in this.datastore) {
            delete this.datastore[key];
        }
    };
    return Dict;
}());
exports.Dict = Dict;
