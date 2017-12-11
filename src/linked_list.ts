import * as lib from './util'
import { Node } from './node'

export class LinkedList<T> {
    protected head: Node<T>
    protected nowNode: Node<T>

    constructor() {
        this.head = new Node()
        this.nowNode = this.head
    }

    protected find(item: T): Node<T> | null {
        let currentNode: Node<T> | null = this.head
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    protected findPrevious(item: T | null): Node<T> {
        let currentNode: Node<T> | null = this.head
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    remove(item: T) {
        let prevNode = this.findPrevious(item)
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next
        }
    }

    insert(newElement: T, item: T | null = null) {
        let newNode = new Node(newElement)
        let current = item === null ? null : this.find(item!)
        if (current === null) {
            this.head.next = newNode
        } else {
            newNode.next = current.next
            current.next = newNode
        }
    }

    display(): string {
        let result: T[] = []
        let currentNode = this.head
        while (currentNode.next !== null) {
            if (currentNode.next.element !== null) {
                result.push(currentNode.next.element)
            }
            currentNode = currentNode.next
        }
        return result.join(',')
    }

    advance(n: number) {
        while (n > 0) {
            if (this.nowNode.next !== null) {
                this.nowNode = this.nowNode.next
            }
            n--
        }
    }
    show(): T | 'HEAD' {
        return this.nowNode.element !== null ? this.nowNode.element : 'HEAD'
    }
}