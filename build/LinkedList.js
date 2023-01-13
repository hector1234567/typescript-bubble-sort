"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class LinkedList extends Sorter_1.Sorter {
    constructor(firstNode) {
        super();
        this.firstNode = firstNode;
    }
    get length() {
        let n = this.firstNode;
        let count = 1;
        while (n.next) {
            count++;
            n = n.next;
        }
        return count;
    }
    compare(leftIndex, rightIndex) {
        return this.getNodeByIndex(leftIndex).value > this.getNodeByIndex(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.getNodeByIndex(leftIndex);
        const rightNode = this.getNodeByIndex(rightIndex);
        const aux = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = aux;
    }
    addNode(node) {
        this.lastNode().next = node;
    }
    getNodeByIndex(index) {
        let n = this.firstNode;
        let count = 0;
        while (count < index) {
            count++;
            if (n.next) {
                n = n.next;
            }
            else {
                throw new Error('Index out of range');
            }
        }
        return n;
    }
    lastNode() {
        let n = this.firstNode;
        while (n.next) {
            n = n.next;
        }
        return n;
    }
    print() {
        let n = this.firstNode;
        console.log(n.value);
        while (n.next) {
            n = n.next;
            console.log(n.value);
        }
    }
}
exports.LinkedList = LinkedList;
