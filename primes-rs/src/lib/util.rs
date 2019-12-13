use wasm_bindgen::prelude::*;

use crate::is_factor;

#[wasm_bindgen(js_name = isEven)]
pub fn is_even(num: u32) -> bool {
    is_factor!(num, 2)
}

#[wasm_bindgen(js_name = isOdd)]
pub fn is_odd(num: u32) -> bool {
    (num & 1) == 1
}

#[wasm_bindgen]
pub fn sqrt(num: u32) -> u32 {
    (num as f64).sqrt() as u32
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn is_even_0() {
        assert_eq!(true, is_even(0));
    }

    #[test]
    fn is_even_1() {
        assert_eq!(false, is_even(1));
    }

    #[test]
    fn is_even_2() {
        assert_eq!(true, is_even(2));
    }

    #[test]
    fn is_odd_0() {
        assert_eq!(false, is_odd(0));
    }

    #[test]
    fn is_odd_1() {
        assert_eq!(true, is_odd(1));
    }

    #[test]
    fn is_odd_2() {
        assert_eq!(false, is_odd(2));
    }

    #[test]
    fn sqrt_0() {
        assert_eq!(0, sqrt(0));
    }

    #[test]
    fn sqrt_1() {
        assert_eq!(1, sqrt(1));
    }

    #[test]
    fn sqrt_2() {
        assert_eq!(1, sqrt(2));
    }

    #[test]
    fn sqrt_4() {
        assert_eq!(2, sqrt(4));
    }

    #[test]
    fn sqrt_9() {
        assert_eq!(3, sqrt(9));
    }
}
