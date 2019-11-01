use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = isEven)]
pub fn is_even(num: u32) -> bool {
    (num & 1) == 0
}

#[wasm_bindgen(js_name = isOdd)]
pub fn is_odd(num: u32) -> bool {
    (num & 1) == 1
}
