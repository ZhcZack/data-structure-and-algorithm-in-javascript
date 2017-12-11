import * as lib from './util'
import { LinkedList } from './linked_list'
import { Node } from './node'

export class DoubleLinkedList<T> extends LinkedList<T> {
    constructor() {
        super()
    }

    protected find(item: T): Node<T> | null {
        let currNode: Node<T> | null = this.head
        while (currNode !== null && currNode.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }

    private findLast(): Node<T> {
        let currNode = this.head
        while (currNode.next !== null) {
            currNode = currNode.next
        }
        return currNode
    }

    displayReverse(): string {
        let result: T[] = []
        let currNode = this.findLast()
        while (currNode.previous !== null) {
            if (currNode.element !== null) {
                result.push(currNode.element)
            }
            currNode = currNode.previous
        }
        return result.join(',')
    }

    insert(newElement: T, item: T | null = null) {
        // 链表这么可怕的嘛……
        const newNode = new Node(newElement)
        if (item === null) {
            this.head.next = newNode
            newNode.previous = this.head
        } else {
            let currNode = this.find(item)
            if (currNode !== null) {
                newNode.next = currNode.next
                currNode.next = newNode
                newNode.previous = currNode
                if (newNode.next !== null) {
                    newNode.next.previous = newNode
                }
            }
        }
    }

    remove(item: T) {
        let currNode = this.find(item)
        if (currNode !== null) {
            if (currNode.next === null) {
                if (currNode.previous !== null) {
                    currNode.previous.next = null
                }
                currNode.previous = null
            } else {
                if (currNode.previous !== null) {
                    currNode.previous.next = currNode.next
                }
                currNode.next.previous = currNode.previous
                currNode.next = null
                currNode.previous = null
            }
        }
    }

    back(n: number) {
        while (n > 0) {
            if (this.nowNode.previous !== null) {
                this.nowNode = this.nowNode.previous
            }
            n--
        }
    }
}