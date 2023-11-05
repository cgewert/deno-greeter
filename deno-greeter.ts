import * as greeter from "./mod.ts";

console.log("Calling greeter function from rust library with deno binding: ");

greeter.greeter("Björn Walther");
