import { Node } from "./Node";
import { Sorter } from "./Sorter";

export class LinkedList extends Sorter{
    constructor(public firstNode: Node) {
        super()
    }
    
    get length() : number {
        let n = this.firstNode;
        let count = 1;
        while(n.next) {
            count ++;
            n = n.next;
        }
        return count;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.getNodeByIndex(leftIndex).value > this.getNodeByIndex(rightIndex).value;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.getNodeByIndex(leftIndex);
        const rightNode = this.getNodeByIndex(rightIndex);
        const aux = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = aux;
    }

    addNode(node: Node) {
        this.lastNode().next = node;
    }

    getNodeByIndex(index: number): Node {
        let n = this.firstNode;
        let count = 0;
        while(count < index) {
            count ++;
            if(n.next) {
                n = n.next;
            } else {
                throw new Error('Index out of range');
            }
        }
        return n
    }

    private lastNode(): Node {
        let n = this.firstNode;
        while(n.next) {
            n = n.next;
        }
        return n;
    }

    print() {
        let n = this.firstNode;
        console.log(n.value)
        while(n.next) {
            n = n.next;
            console.log(n.value)
        }
    }
}