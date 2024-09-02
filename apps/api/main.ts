import { add, sayHello } from "@local/utils";
import express from "express";

console.log("Starting API server...");

sayHello();

const result = add(1, 2);

console.log(`1 + 2 = ${result}`);

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("API server started on port 3000");
});
