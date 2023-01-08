import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
    constructor(public data: NumbersCollection){}

    sort(): void {
        for(let i=0; i<this.data.length; i++) {
            for(let j=1; j<this.data.length - i; j++) {
                if(this.data.compare(j-1, j)) {
                    this.data.swap(j-1, j);
                }
            }
        }
    }
}