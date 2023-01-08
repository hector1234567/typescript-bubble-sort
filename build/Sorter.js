"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(data) {
        this.data = data;
    }
    sort() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 1; j < this.data.length - i; j++) {
                if (this.data.compare(j - 1, j)) {
                    this.data.swap(j - 1, j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
