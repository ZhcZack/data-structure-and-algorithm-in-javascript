import { LinkedList } from './linked_list'
import { Node } from './node'

export class LoopLinkedList<T> extends LinkedList<T> {
    constructor() {
        super()
    }

    insert(newElement: T, item: T | null = null) {
        let newNode = new Node(newElement)
        let current = item === null ? null : this.find(item!)
        if (current === null) {
            this.head.next = newNode
            newNode.next = this.head
        } else {
            newNode.next = current.next
            current.next = newNode
        }
    }

    display(): string {
        let result: T[] = []
        let currNode: Node<T> | null = this.head
        do {
            if (currNode.element !== null) {
                result.push(currNode.element)
            }
            currNode = currNode.next
        } while (currNode !== null && currNode.element !== null && currNode.next !== null)
        return result.join(',')
    }
}