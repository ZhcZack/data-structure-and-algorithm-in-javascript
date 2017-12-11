export class Node<T> {
    constructor(public element: T | null = null, public next: Node<T> | null = null, public previous: Node<T> | null = null) { }
}