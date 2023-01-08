import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbers = new Sorter(new NumbersCollection([5,2,3,1,6,7,4,2,5,23,564,1,4,655]));

numbers.sort();

console.log(numbers.data)