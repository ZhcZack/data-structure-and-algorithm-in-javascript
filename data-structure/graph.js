"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("./util");
// 用number来代替T
var Vertex = /** @class */ (function () {
    function Vertex(label, wasVisited) {
        if (wasVisited === void 0) { wasVisited = false; }
        this.label = label;
        this.wasVisited = wasVisited;
    }
    return Vertex;
}());
var Graph = /** @class */ (function () {
    function Graph(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for (var i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.marked[i] = false;
            // this.adj[i].push(undefined)
        }
    }
    Graph.prototype.addEdge = function (v, w) {
        if (v >= this.vertices || w >= this.vertices) {
            return;
        }
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    };
    Graph.prototype.showGraph = function () {
        var str = '';
        for (var i = 0; i < this.vertices; i++) {
            str += String(i) + ' -> ';
            for (var j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== undefined) {
                    str += this.adj[i][j] + ' ';
                }
            }
            lib.log(str);
            str = '';
        }
    };
    // 深度优先
    Graph.prototype.dfs = function (v) {
        this.marked[v] = true;
        if (this.adj[v] !== undefined) {
            lib.log('Visited vertex: ' + v);
        }
        for (var _i = 0, _a = this.adj[v]; _i < _a.length; _i++) {
            var w = _a[_i];
            if (w !== undefined && !this.marked[w]) {
                this.dfs(w);
            }
        }
    };
    return Graph;
}());
exports.Graph = Graph;
