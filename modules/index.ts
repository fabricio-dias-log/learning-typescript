// 1 - File import
import importGreet from "./greet";
importGreet();// in terminal use the command node index.js to use the function

// 2 - Import variable
import {x} from "./variables";
console.log(x);

// 3 - Multiple import
import { a, b, c, myFunction } from "./multiple";

console.log(a);
console.log(b);
console.log(c);
myFunction();

// 4 - Alias for import
import { someName as name } from "./chaneName";

console.log(name);

// 5 - Importing all data
import * as myNumbers from './numbers';

console.log(myNumbers);

const nX = myNumbers.n1;
console.log(nX);

myNumbers.showNumber();