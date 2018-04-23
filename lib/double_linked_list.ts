import * as lib from './util'
import { LinkedList } from './linked_list'
import { Node } from './node'

class DLNode<T> implements Node<T> {
    constructor(public element?: T, public next?: DLNode<T>, public prev?: DLNode<T>) { }
}

export class DoubleLinkedList<T> extends LinkedList<T> {
    head: DLNode<T>
    constructor() {
        super()
        this.head = new DLNode()
    }

    protected find(item: T): DLNode<T> | null {
        let currNode = this.head
        while (currNode.next) {
            currNode = currNode.next
            if (currNode.element === item) {
                return currNode
            }
        }
        return null
    }

    private findLast(): DLNode<T> {
        let currNode = this.head
        while (currNode.next) {
            currNode = currNode.next
        }
        return currNode
    }

    reverseWalkThrough(): string {
        let result: T[] = []
        let currNode = this.findLast()
        while (currNode.prev) {
            if (currNode.element) {
                result.push(currNode.element)
            }
            currNode = currNode.prev
        }
        return result.join(',')
    }

    insertAfter(newElement: T, item: T | null = null) {
        // 链表这么可怕的嘛……
        const newNode = new DLNode(newElement)
        if (item === null) {
            this.head.next = newNode
            newNode.prev = this.head
        } else {
            let currNode = this.find(item)
            if (currNode !== null) {
                newNode.next = currNode.next
                currNode.next = newNode
                newNode.prev = currNode
                if (newNode.next) {
                    newNode.next.prev = newNode
                }
            }
        }
    }

    remove(item: T) {
        let currNode = this.find(item)
        if (currNode) {
            if (!currNode.next) {
                if (currNode.prev) {
                    currNode.prev.next = undefined
                }
                currNode.prev = undefined
            } else {
                if (currNode.prev) {
                    currNode.prev.next = currNode.next
                }
                currNode.next.prev = currNode.prev
                currNode.next = undefined
                currNode.prev = undefined
            }
        }
    }

    back(n: number) {
        while (n > 0) {
            if (this.nowNode.prev) {
                this.nowNode = this.nowNode.prev
            }
            n--
        }
    }
}