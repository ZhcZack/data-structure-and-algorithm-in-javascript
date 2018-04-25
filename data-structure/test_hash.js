"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("./util");
var hash_1 = require("./hash");
function test1() {
    var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan',];
    var table = new hash_1.HashTable();
    for (var _i = 0, someNames_1 = someNames; _i < someNames_1.length; _i++) {
        var name_1 = someNames_1[_i];
        table.put(name_1);
    }
    table.showDistro();
}
lib.doTest(test1);
