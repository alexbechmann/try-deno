import { DELIMITER } from "@std/path";

export function sayHello() {
  console.log("Hello from utils", DELIMITER);
}

export function add(a: number, b: number): number {
  return a + b;
}
