import { Graph } from './graph'
import * as lib from './util'

function test1() {
    const g = new Graph(5)
    g.addEdge(0, 1)
    g.addEdge(0, 2)
    g.addEdge(1, 3)
    g.addEdge(2, 4)
    g.showGraph()
}
lib.doTest(test1)

function dfsTest() {
    const g = new Graph(5)
    g.addEdge(0, 1)
    g.addEdge(0, 2)
    g.addEdge(1, 3)
    g.addEdge(2, 4)
    g.dfs(0)
}
lib.doTest(dfsTest)