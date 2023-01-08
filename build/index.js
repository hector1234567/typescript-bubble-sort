"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
const numbers = new Sort_1.Sort([5, 2, 3, 1, 6, 7, 4, 2, 5, 23, 564, 1, 4, 655]);
numbers.sort();
console.log(numbers.data);
