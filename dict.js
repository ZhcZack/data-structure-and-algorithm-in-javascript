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
    return Dict;
}());
exports.Dict = Dict;
