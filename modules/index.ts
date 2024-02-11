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