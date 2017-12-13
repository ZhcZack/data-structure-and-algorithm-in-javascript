"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graph_1 = require("./graph");
var lib = require("./util");
function test1() {
    var g = new graph_1.Graph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.showGraph();
}
lib.doTest(test1);
function dfsTest() {
    var g = new graph_1.Graph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.dfs(0);
}
lib.doTest(dfsTest);
