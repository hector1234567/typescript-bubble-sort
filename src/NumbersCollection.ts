export class NumbersCollection {
    constructor(public collection: number[]){}

    get length(): number {
        return this.collection.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[rightIndex] < this.collection[leftIndex];
    }
    
    swap(leftIndex: number, rightIndex: number): void {
        const aux = this.collection[rightIndex];
        this.collection[rightIndex] = this.collection[leftIndex];
        this.collection[leftIndex] = aux;
    }
}