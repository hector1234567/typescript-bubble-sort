"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(collection) {
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        return this.collection[rightIndex] < this.collection[leftIndex];
    }
    swap(leftIndex, rightIndex) {
        const aux = this.collection[rightIndex];
        this.collection[rightIndex] = this.collection[leftIndex];
        this.collection[leftIndex] = aux;
    }
}
exports.NumbersCollection = NumbersCollection;
