"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dict_1 = require("./dict");
var lib = require("./util");
function test1() {
    var pbook = new dict_1.Dict();
    pbook.add('Mike', 233);
    pbook.add('David', 666);
    lib.assertEqual(pbook.find('David'), 666);
    pbook.remove('David');
    lib.assertEqual(pbook.showAll(), 'Mike:233');
}
lib.doTest(test1);
