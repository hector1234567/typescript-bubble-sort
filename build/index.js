"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numbers = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([5, 2, 3, 1, 6, 7, 4, 2, 5, 23, 564, 1, 4, 655]));
numbers.sort();
console.log(numbers.data);
