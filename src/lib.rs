use deno_bindgen::deno_bindgen;
use std::primitive::str;

#[deno_bindgen]
pub fn greeter(name: &str) {
    println!("Greetings {}", name);
}
