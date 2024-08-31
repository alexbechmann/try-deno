import { add, sayHello } from "@local/utils";

sayHello();

console.log("Starting API server...");

const result = add(1, 2);

console.log(`1 + 2 = ${result}`);
