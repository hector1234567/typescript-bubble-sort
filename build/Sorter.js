"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 1; j < this.length - i; j++) {
                if (this.compare(j - 1, j)) {
                    this.swap(j - 1, j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
