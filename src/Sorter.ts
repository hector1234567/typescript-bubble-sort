export class Sorter {
    constructor(public data: number[]){}

    sort() {
        for(let i=0; i<this.data.length; i++) {
            for(let j=1; j<this.data.length - i; j++) {
                if(this.data[j] < this.data[j-1]) {
                    const aux = this.data[j];
                    this.data[j] = this.data[j-1];
                    this.data[j-1] = aux;
                }
            }
        }
    }
}