use std::iter::once;

use wasm_bindgen::prelude::*;

use crate::iif;
use crate::is_factor;
use crate::util::is_even;

#[wasm_bindgen(js_name = isFactor)]
pub fn is_factor(num: u32, divisor: u32) -> bool {
    is_factor!(num, divisor)
}

#[wasm_bindgen(js_name = anyFactorIn)]
pub fn any_factor_in(num: u32, divisors: &[u32]) -> bool {
    divisors.iter().any(|d| is_factor!(&num, d))
}

#[wasm_bindgen(js_name = factorListIn)]
pub fn factor_list_in(num: u32, divisors: &[u32]) -> Vec<u32> {
    iif! {
        num == 0 => Vec::new();
        divisors
            .iter()
            .filter(|&d| is_factor!(&num, d))
            .cloned()
            .collect()
    }
}

#[wasm_bindgen(js_name = factorList)]
pub fn factor_list(num: u32) -> Vec<u32> {
    match num {
        0 => Vec::new(),
        1 => vec![1],
        n => {
            let inner = iif!(is_even(n) => (2..n).step_by(1); (3..n).step_by(2))
                .filter(|d| is_factor!(&n, d));
            once(1).chain(inner).chain(once(n)).collect()
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn is_factor_4_0() {
        assert_eq!(false, is_factor(4, 0));
    }

    #[test]
    fn is_factor_4_1() {
        assert_eq!(true, is_factor(4, 1));
    }

    #[test]
    fn is_factor_4_2() {
        assert_eq!(true, is_factor(4, 2));
    }

    #[test]
    fn is_factor_4_3() {
        assert_eq!(false, is_factor(4, 3));
    }

    #[test]
    fn is_factor_4_4() {
        assert_eq!(true, is_factor(4, 4));
    }

    #[test]
    fn any_factor_in_ok() {
        assert_eq!(true, any_factor_in(4, &[2]));
    }

    #[test]
    fn any_factor_in_nok() {
        assert_eq!(false, any_factor_in(4, &[3]));
    }

    #[test]
    fn any_factor_in_empty() {
        assert_eq!(false, any_factor_in(4, &[]));
    }

    #[test]
    fn factor_list_in_empty() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, factor_list_in(4, &[]));
    }

    #[test]
    fn factor_list_in_nok() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, factor_list_in(4, &[3]));
    }

    #[test]
    fn factor_list_in_1_el() {
        assert_eq!(vec![2], factor_list_in(4, &[2, 3]));
    }

    #[test]
    fn factor_list_in_2_el() {
        assert_eq!(vec![2, 4], factor_list_in(4, &[2, 3, 4]));
    }

    #[test]
    fn factor_list_in_range() {
        assert_eq!(
            vec![1, 2, 4],
            factor_list_in(4, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn factor_list_0() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, factor_list(0));
    }

    #[test]
    fn factor_list_1() {
        assert_eq!(vec![1], factor_list(1));
    }

    #[test]
    fn factor_list_2() {
        assert_eq!(vec![1, 2], factor_list(2));
    }

    #[test]
    fn factor_list_3() {
        assert_eq!(vec![1, 3], factor_list(3));
    }

    #[test]
    fn factor_list_4() {
        assert_eq!(vec![1, 2, 4], factor_list(4));
    }
}
