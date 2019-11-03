use std::cmp::Ordering;

use rand::prelude::*;
use wasm_bindgen::prelude::*;

use crate::util::{is_even, is_odd};

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

    #[wasm_bindgen]
    pub fn nth(n: u32) -> Option<u32> {
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
            return None;
        }
        primes.get(n as usize).cloned()
    }

    #[wasm_bindgen(js_name = randomRange)]
    pub fn random_range(begin: u32, end: u32) -> Option<u32> {
        match begin.cmp(&end) {
            Ordering::Greater => None,
            Ordering::Equal => Self::prime(begin),
            _ => {
                let orig = thread_rng().gen_range(begin, end + 1);
                if Self::is_prime(orig) {
                    return Some(orig);
                }
                let res = match Self::closest_prime(orig + 1, true) {
                    Some(n) => match n.cmp(&end) {
                        Ordering::Greater => None,
                        _ => Some(n),
                    },
                    None => None,
                };
                match res {
                    Some(n) => Some(n),
                    _ => match Self::closest_prime(orig - 1, false) {
                        Some(n) => match n.cmp(&begin) {
                            Ordering::Less => None,
                            _ => Some(n),
                        },
                        None => None,
                    },
                }
            }
        }
    }

    #[wasm_bindgen]
    pub fn random() -> Option<u32> {
        let mut generator = thread_rng();
        match generator.gen() {
            n @ 1..=99 => Self::closest_prime(n, true),
            n => match generator.gen() {
                true => Self::closest_prime(n, true),
                _ => Self::closest_prime(n, false),
            },
        }
    }

    #[wasm_bindgen(js_name = closestPrime)]
    pub fn closest_prime(num: u32, asc: bool) -> Option<u32> {
        let num = match num {
            2 => return Some(2),
            n if is_even(n) => n + 1,
            n => n,
        };
        match asc {
            true => (num..).step_by(2).find(Self::is_prime_ref),
            _ => match num.cmp(&3) {
                Ordering::Less => None,
                _ => (3..=num).rev().step_by(2).find(Self::is_prime_ref),
            },
        }
    }

    #[wasm_bindgen]
    pub fn prime(num: u32) -> Option<u32> {
        match Self::is_prime_ref(&num) {
            true => Some(num),
            _ => None,
        }
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
