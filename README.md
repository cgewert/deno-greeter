# Deno Greeter

## Author

Christian Gewert <cgewert@gmail.com>

## Description

An example project for creating Deno bindings that can be used to call functions from a Rust library.

## How to use

One can annotate Rust functions inside lib.rs with

```rust
#[deno_bindgen]
```

Install [deno-bindgen CLI](https://github.com/denoland/deno_bindgen)

Call deno bindgen from command line

```sh
$ deno_bindgen
```

This will create the bindings.ts file inside your repository.
You can import the generated Typescript functions now inside your project.

## Important Note

One must run deno with FFI and unstable flag to make use of this functionality:

```sh
deno run --allow-ffi --unstable your-typescript-file.ts
```
