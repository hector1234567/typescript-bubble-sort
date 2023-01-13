export abstract class Sorter {
    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        for(let i=0; i<this.length; i++) {
            for(let j=1; j<this.length - i; j++) {
                if(this.compare(j-1, j)) {
                    this.swap(j-1, j);
                }
            }
        }
    }
}