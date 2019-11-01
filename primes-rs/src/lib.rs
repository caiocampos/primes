extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

pub mod util;

use util::{is_even, is_odd};

#[wasm_bindgen]
pub struct PrimeNumber;

#[wasm_bindgen]
impl PrimeNumber {
    #[wasm_bindgen(js_name = rangeList)]
    pub fn range_list(begin: u32, end: u32) -> Vec<u32> {
        match (begin, end) {
            (b, e) if b == e => match Self::is_prime(b) {
                true => vec![b],
                _ => Vec::new(),
            },
            (b, e) if b > e => Vec::new(),
            (b, e) => (b..=e)
                .filter(|&i| i == 2 || is_odd(i))
                .filter(Self::is_prime_ref)
                .collect(),
        }
    }

    #[wasm_bindgen(js_name = nth)]
    pub fn nth(n: u32) -> u32 {
        let mut primes = vec![2u32];
        let mut next = 3u32;
        let res = (1..=n).try_for_each(|_| match (next..).step_by(2).find(Self::is_prime_ref) {
            Some(prime) => {
                next = prime + 2;
                primes.push(prime);
                Ok(())
            }
            None => Err(()),
        });
        if res.is_err() {
            return 0;
        }
        primes[n as usize]
    }

    #[wasm_bindgen(js_name = isPrime)]
    pub fn is_prime(num: u32) -> bool {
        Self::is_prime_ref(&num)
    }

    fn is_prime_ref(num: &u32) -> bool {
        match num {
            0 | 1 => false,
            2 | 3 => true,
            &n if is_even(n) || n % 3 == 0 => false,
            &n => !(5..=((n as f64).sqrt() as u32))
                .step_by(6)
                .any(|i| n % i == 0 || n % (i + 2) == 0),
        }
    }
}
