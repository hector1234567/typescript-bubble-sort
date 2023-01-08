import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Node } from "./Node";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const numbers = new Sorter(new NumbersCollection([5,2,3,1,6,7,4,2,5,23,564,1,4,655]));
// const chars = new Sorter(new CharactersCollection('Hector'));

// numbers.sort();
// chars.sort();

// console.log(numbers.data)
// console.log(chars.data)

const linkedList = new LinkedList(new Node(345));
linkedList.addNode(new Node(435456))
linkedList.addNode(new Node(23))
linkedList.addNode(new Node(88))
linkedList.addNode(new Node(567))

const sorterList = new Sorter(linkedList);
sorterList.sort();
linkedList.print();