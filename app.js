// const obj = require("./sum");
const { calculateSum, multiply } = require("./calculate");
const data = require("./data.json");
const util = require("node:util");

var a = "hello world";
var b = 10;
var c = 20;

console.log("app module executed");
console.log(globalThis === global);
// obj.calculateSum(b, c);
// console.log(obj.x);
calculateSum(b, c);
multiply(b, c);
console.log("data module executed =", data);
console.log(util.inspect(data, { showHidden: false, depth: null }));
