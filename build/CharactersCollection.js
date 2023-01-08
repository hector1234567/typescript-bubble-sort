"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toUpperCase() > this.data[rightIndex].toUpperCase();
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split('');
        const aux = chars[rightIndex];
        chars[rightIndex] = chars[leftIndex];
        chars[leftIndex] = aux;
        this.data = chars.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
