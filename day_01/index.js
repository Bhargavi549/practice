import moment from "moment/moment.js";
import defaultExports from "./DefaultExports.js";
import { diff, mul, sum } from "./NamedExports.js";

const results = defaultExports(2, 7);
console.log("results", results);

const sum1 = sum(2, 3);
const diff1 = diff(2, 3);
const mul1 = mul(2, 3)
console.log("sum", sum1, "diff", diff1, "mul", mul1)

console.log(moment(new Date()).format('DD-MMM-YYYY'))
