"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const Node_1 = require("./Node");
const Sorter_1 = require("./Sorter");
// const numbers = new Sorter(new NumbersCollection([5,2,3,1,6,7,4,2,5,23,564,1,4,655]));
// const chars = new Sorter(new CharactersCollection('Hector'));
// numbers.sort();
// chars.sort();
// console.log(numbers.data)
// console.log(chars.data)
const linkedList = new LinkedList_1.LinkedList(new Node_1.Node(345));
linkedList.addNode(new Node_1.Node(435456));
linkedList.addNode(new Node_1.Node(23));
linkedList.addNode(new Node_1.Node(88));
linkedList.addNode(new Node_1.Node(567));
const sorterList = new Sorter_1.Sorter(linkedList);
sorterList.sort();
linkedList.print();
