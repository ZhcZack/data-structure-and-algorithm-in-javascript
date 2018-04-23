import * as lib from './util'

class BNode<T> {
    constructor(public data: T, public left: BNode<T> | null = null, public right: BNode<T> | null = null) { }
}

export class BST<T> {
    root: BNode<T> | null

    constructor() {
        this.root = null
    }

    insert(data: T) {
        const n = new BNode(data)
        if (this.root === null) {
            this.root = n
        } else {
            let current: BNode<T> | null = this.root
            let parent: BNode<T> | null
            while (true) {
                parent = current
                if (data < current!.data) {
                    current = current!.left
                    if (current === null) {
                        parent!.left = n
                        break
                    }
                } else {
                    current = current!.right
                    if (current === null) {
                        parent!.right = n
                        break
                    }
                }
            }
        }
    }

    inOrder(node: BNode<T>) {
        if (node !== null) {
            if (node.left) {
                this.inOrder(node.left)
            }
            lib.log(node.data + ' ')
            if (node.right) {
                this.inOrder(node.right)
            }
        }
    }

    preOrder(node: BNode<T>) {
        if (node !== null) {
            lib.log(node.data)
            if (node.left) {
                this.preOrder(node.left)
            }
            if (node.right) {
                this.preOrder(node.right)
            }
        }
    }

    postOrder(node: BNode<T>) {
        if (node !== null) {
            if (node.left) {
                this.postOrder(node.left)
            }
            if (node.right) {
                this.postOrder(node.right)
            }
            lib.log(node.data)
        }
    }

    get min(): T | null {
        if (this.root === null) {
            return null
        } else {
            let current = this.root
            while (current.left !== null) {
                current = current.left
            }
            return current.data
        }
    }

    get max(): T | null {
        if (this.root === null) {
            return null
        } else {
            let current = this.root
            while (current.right !== null) {
                current = current.right
            }
            return current.data
        }
    }

    find(data: T): BNode<T> | null {
        if (this.root === null) {
            return null
        } else {
            let current: BNode<T> | null = this.root
            while (current !== null) {
                if (current.data === data) {
                    return current
                } else if (current.data > data) {
                    current = current.left
                } else {
                    current = current.right
                }
            }
            return null
        }
    }


    remove(data: T): boolean {
        return this.badRemove(data)
    }

    // 删掉data数值节点，新建另外一棵树。如果真的用这个内存使用应该会相当可怕……
    private badRemove(data: T): boolean {
        let nodeValues: T[] = []
        if (this.root === null) {
            return false
        } else {
            iter(this.root)
            const pos = nodeValues.indexOf(data)
            if (pos < 0) {
                return false
            } else {
                nodeValues.splice(pos, 1)
                this.root = null
                for (let value of nodeValues) {
                    this.insert(value)
                }
                return true
            }
        }

        function iter(node: BNode<T>) {
            if (node !== null) {
                nodeValues.push(node.data)
                if (node.left) {
                    iter(node.left)
                }
                if (node.right) {
                    iter(node.right)
                }
            }
        }
    }

    private iterNodeNumbers(node: BNode<T> | null, callback: () => void) {
        if (node !== null) {
            callback()
            if (node.left) {
                this.iterNodeNumbers(node.left, callback)
            }
            if (node.right) {
                this.iterNodeNumbers(node.right, callback)
            }
        }
    }

    private iterSlideNumbers(node: BNode<T> | null, callback: () => void) {
        if (node !== null) {
            if (node.left) {
                callback()
                this.iterSlideNumbers(node.left, callback)
            }
            if (node.right) {
                callback()
                this.iterSlideNumbers(node.right, callback)
            }
        }
    }

    get numberOfNode(): number {
        let n = 0
        this.iterNodeNumbers(this.root, () => {
            n++
        })
        return n
    }

    get numberOfSlide(): number {
        let n = 0
        this.iterSlideNumbers(this.root, () => {
            n++
        })
        return n
    }
}