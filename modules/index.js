"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - File import
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)(); // in terminal use the command node index.js to use the function
// 2 - Import variable
const variables_1 = require("./variables");
console.log(variables_1.x);
