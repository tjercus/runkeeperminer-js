import fs from "fs";
import shoeNames from "./shoeNames";
import {extractShoeName, extractDistance} from "./extractor";

const updateTotal = (shoeNames, totalsPerShoe, line) => {
  let shoeName = extractShoeName(line, shoeNames);
  let distance = extractDistance(line);
  let originalDistance = parseFloat(totalsPerShoe.get(shoeName));
  totalsPerShoe.set(shoeName, parseFloat(originalDistance + distance).toFixed(2));
  return totalsPerShoe;
};

let totalsPerShoe = new Map();
shoeNames.forEach(shoe => {
  totalsPerShoe.set(shoe, 0.0);
});

console.time("time to parse");
const lines = fs.readFileSync("./data/cardioActivities.csv").toString().split("\n");
lines.forEach(line => {
  totalsPerShoe = updateTotal(shoeNames, totalsPerShoe, line);
});
console.time("time to parse");
console.dir(totalsPerShoe);
