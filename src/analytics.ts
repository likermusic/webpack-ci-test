import * as $ from "jquery";

console.log("Collect analytics...");
console.log("Tests");

console.log($("img").attr("src"));

function test(a: number, b: number): number {
  return a + b;
}
console.log("TS works" + test(1, 2));
