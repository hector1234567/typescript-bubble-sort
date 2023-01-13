import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
    constructor(public data: string) {
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toUpperCase() > this.data[rightIndex].toUpperCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const chars = this.data.split('');
        const aux = chars[rightIndex];
        chars[rightIndex] = chars[leftIndex];
        chars[leftIndex] = aux;
        this.data = chars.join('');
    }
}