import { LinkedList } from './linked_list'
import { Node } from './node'

class LLLNode<T> implements Node<T> {
    constructor(public element?: T, public next?: Node<T>, public prev?: Node<T>) { }
}

export class LoopLinkedList<T> extends LinkedList<T> {
    constructor() {
        super()
    }

    insertAfter(newElement: T, item: T | null = null) {
        let newNode = new LLLNode(newElement)
        let current = item === null ? null : this.find(item!)
        if (current === null) {
            this.head.next = newNode
            newNode.next = this.head
        } else {
            newNode.next = current.next
            current.next = newNode
        }
    }
}