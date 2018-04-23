import * as lib from './util'
import { Node } from './node'

class LLNode<T> implements Node<T> {
    constructor(public element?: T, public next?: Node<T>, public prev?: Node<T>) { }
}

export class LinkedList<T> {
    protected head: LLNode<T>
    protected nowNode: LLNode<T>

    constructor() {
        this.head = new LLNode<T>()
        this.nowNode = this.head
    }

    protected find(item: T): LLNode<T> | null {
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
            if (currentNode.element === item) {
                return currentNode
            }
        }
        return null
    }

    protected findPrevious(item: T): LLNode<T> {
        let currentNode: LLNode<T> | null = this.head
        while (currentNode.next && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    remove(item: T) {
        let prevNode = this.findPrevious(item)
        if (prevNode.next) {
            prevNode.next = prevNode.next.next
        }
    }

    insertAfter(newElement: T, item: T | undefined = undefined) {
        let newNode = new LLNode<T>(newElement)
        let current = item === undefined ? undefined : this.find(item!)
        if (!current) {
            this.head.next = newNode
        } else {
            newNode.next = current.next
            current.next = newNode
        }
    }

    // for debug
    walkThrough(): string {
        let result: T[] = []
        let currentNode = this.head

        while (currentNode.next && currentNode.next.element) {
            result.push(currentNode.next.element)
            currentNode = currentNode.next
        }
        return result.join(',')
    }

    advance(n: number) {
        while (n > 0) {
            if (this.nowNode.next) {
                this.nowNode = this.nowNode.next
            }
            n--
        }
    }
    show(): string {
        if (this.nowNode.element) {
            return String(this.nowNode.element)
        }
        return 'HEAD'
    }
}