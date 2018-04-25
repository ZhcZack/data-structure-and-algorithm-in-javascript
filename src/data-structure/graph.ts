import * as lib from './util'

// 用number来代替T
class Vertex {
    constructor(public label: number, public wasVisited: boolean = false) { }
}

export class Graph {
    private vertices: number
    private edges: number
    private adj: Array<number | undefined>[]
    private marked: boolean[]

    constructor(v: number) {
        this.vertices = v
        this.edges = 0
        this.adj = []
        this.marked = []
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = []
            this.marked[i] = false
            // this.adj[i].push(undefined)
        }
    }

    addEdge(v: number, w: number) {
        if (v >= this.vertices || w >= this.vertices) {
            return
        }
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++
    }

    showGraph() {
        let str = ''
        for (let i = 0; i < this.vertices; i++) {
            str += String(i) + ' -> '
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== undefined) {
                    str += this.adj[i][j] + ' '
                }
            }
            lib.log(str)
            str = ''
        }
    }
    // 深度优先
    dfs(v: number) {
        this.marked[v] = true
        if (this.adj[v] !== undefined) {
            lib.log('Visited vertex: ' + v)
        }
        for (let w of this.adj[v]) {
            if (w !== undefined && !this.marked[w]) {
                this.dfs(w)
            }
        }
    }
}