import { add, sayHello } from "@local/utils";

console.log("Starting API server...");

sayHello();

const result = add(1, 2);

console.log(`1 + 2 = ${result}`);
