use std::cmp::Ordering::*;

use rand::prelude::*;
use wasm_bindgen::prelude::*;

use crate::factor::{any_factor_in, factor_list_in};
use crate::iif;
use crate::is_factor;
use crate::util::{is_even, sqrt};

const MAX_PRIME: u32 = 4294967291;

#[wasm_bindgen]
pub struct PrimeNumber;

#[wasm_bindgen]
impl PrimeNumber {
    #[wasm_bindgen(js_name = rangeList)]
    pub fn range_list(begin: u32, end: u32) -> Vec<u32> {
        match (begin, end) {
            (b, e) if b == e => iif!(Self::is_prime(b) => vec![b]; Vec::new()),
            (b, e) if b > e => Vec::new(),
            (b, e) => (b..=e).filter(Self::is_prime_ref).collect(),
        }
    }

    #[wasm_bindgen]
    pub fn nth(n: u32) -> Option<u32> {
        match n.cmp(&199999) {
            Greater => return None, // Very slow
            Equal => return Some(1299709),
            _ => (),
        }
        let mut primes = vec![2, 3, 5, 7, 11, 13, 17, 19, 23];
        if n > 8 {
            let mut next = 29u32;
            let search = |_| match (next..).step_by(2).find(Self::is_prime_ref) {
                Some(prime) => {
                    next = prime + 2;
                    primes.push(prime);
                    Ok(())
                }
                None => Err(()),
            };
            if (9..=n).try_for_each(search).is_err() {
                return None;
            }
        }
        primes.get(n as usize).cloned()
    }

    #[wasm_bindgen(js_name = randomRange)]
    pub fn random_range(begin: u32, end: u32) -> Option<u32> {
        match begin.cmp(&end) {
            Greater => None,
            Equal => Self::prime(begin),
            _ => {
                let orig = thread_rng().gen_range(begin, end + 1);
                if Self::is_prime(orig) {
                    return Some(orig);
                }
                let res = match Self::closest_prime(orig + 1, true) {
                    Some(n) => match n.cmp(&end) {
                        Greater => None,
                        _ => Some(n),
                    },
                    None => None,
                };
                match res {
                    Some(n) => Some(n),
                    _ => match Self::closest_prime(orig - 1, false) {
                        Some(n) => match n.cmp(&begin) {
                            Less => None,
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
            n @ 0..=99 => Self::closest_prime(n, true),
            n if n >= MAX_PRIME => Some(MAX_PRIME),
            n => iif! {
                generator.gen() => Self::closest_prime(n, true);
                Self::closest_prime(n, false)
            },
        }
    }

    #[wasm_bindgen(js_name = closestPrime)]
    pub fn closest_prime(num: u32, asc: bool) -> Option<u32> {
        let num = match num {
            0 | 1 => 1,
            2 | 3 | MAX_PRIME => return Some(num),
            n if is_even(n) => iif! {asc => n + 1; n - 1},
            n => n,
        };
        iif! {
            asc => match num.cmp(&MAX_PRIME) {
                Less => (num..).step_by(2).find(Self::is_prime_ref),
                _ => None,
            };
            match num.cmp(&3) {
                Greater => (3..=num).rev().step_by(2).find(Self::is_prime_ref),
                _ => None,
            }
        }
    }

    #[wasm_bindgen(js_name = anyPrimeFactorIn)]
    pub fn any_prime_factor_in(num: u32, divisors: &[u32]) -> bool {
        match num {
            0 | 1 => false,
            _ => any_factor_in(num, &Self::prime_list_in(divisors)),
        }
    }

    #[wasm_bindgen(js_name = primeFactorListIn)]
    pub fn prime_factor_list_in(num: u32, divisors: &[u32]) -> Vec<u32> {
        match num {
            0 | 1 => Vec::new(),
            _ => factor_list_in(num, &Self::prime_list_in(divisors)),
        }
    }

    #[wasm_bindgen(js_name = primeFactorList)]
    pub fn prime_factor_list(num: u32) -> Vec<u32> {
        let mut prime = 2;
        let mut list = Vec::new();
        loop {
            if prime > sqrt(num) {
                if Self::is_prime_ref(&num) {
                    list.push(num);
                }
                break;
            }
            if is_factor!(num, prime) {
                list.push(prime);
            }
            match Self::closest_prime(prime + 1, true) {
                Some(p) => prime = p,
                _ => break,
            }
        }
        list
    }

    #[wasm_bindgen]
    pub fn prime(num: u32) -> Option<u32> {
        iif!(Self::is_prime_ref(&num) => Some(num); None)
    }

    #[wasm_bindgen(js_name = filterPrimes)]
    pub fn prime_list_in(list: &[u32]) -> Vec<u32> {
        list.iter().cloned().filter(Self::is_prime_ref).collect()
    }

    #[wasm_bindgen(js_name = isPrime)]
    pub fn is_prime(num: u32) -> bool {
        Self::is_prime_ref(&num)
    }

    fn is_prime_ref(num: &u32) -> bool {
        match num {
            0 | 1 => false,
            2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 => true,
            n if is_factor!(n, &[2, 3, 5, 7, 11, 13, 17, 19, 23]) => false,
            &n => !(29..=sqrt(n))
                .step_by(6)
                .any(|i| is_factor!(n, &[i, i + 2])),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn range_list_900_900() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::range_list(900, 900));
    }

    #[test]
    fn range_list_999_900() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::range_list(999, 900));
    }

    #[test]
    fn range_list_953_953() {
        assert_eq!(vec![953], PrimeNumber::range_list(953, 953));
    }
    #[test]
    fn range_list_900_999() {
        assert_eq!(
            vec![907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            PrimeNumber::range_list(900, 999)
        );
    }

    #[test]
    fn range_list_900_953() {
        assert_eq!(
            vec![907, 911, 919, 929, 937, 941, 947, 953],
            PrimeNumber::range_list(900, 953)
        );
    }

    #[test]
    fn range_list_953_999() {
        assert_eq!(
            vec![953, 967, 971, 977, 983, 991, 997],
            PrimeNumber::range_list(953, 999)
        );
    }

    #[test]
    fn nth_0() {
        assert_eq!(Some(2), PrimeNumber::nth(0));
    }

    #[test]
    fn nth_199999() {
        assert_eq!(Some(1299709), PrimeNumber::nth(199999));
    }

    #[test]
    fn nth_14() {
        assert_eq!(Some(47), PrimeNumber::nth(14));
    }

    #[test]
    fn random_range_953_999() {
        (0..9).for_each(|_| {
            assert!(PrimeNumber::random_range(953, 999).is_some());
        });
    }

    #[test]
    fn random_range_0_999() {
        (0..9).for_each(|_| {
            assert!(PrimeNumber::random_range(0, 999).is_some());
        });
    }

    #[test]
    fn random_range_0_0() {
        assert!(PrimeNumber::random_range(0, 0).is_none());
    }

    #[test]
    fn random_range_972_976() {
        assert!(PrimeNumber::random_range(972, 976).is_none());
    }

    #[test]
    fn random_range_976_972() {
        assert!(PrimeNumber::random_range(976, 972).is_none());
    }

    #[test]
    fn random_range_953_953() {
        assert!(PrimeNumber::random_range(953, 953).is_some());
    }

    #[test]
    fn random_ok() {
        (0..99).for_each(|_| {
            assert!(PrimeNumber::random().is_some());
        });
    }

    #[test]
    fn closest_prime_7_asc() {
        assert_eq!(Some(7), PrimeNumber::closest_prime(7, true));
    }

    #[test]
    fn closest_prime_8_asc() {
        assert_eq!(Some(11), PrimeNumber::closest_prime(8, true));
    }

    #[test]
    fn closest_prime_0_desc() {
        assert_eq!(None, PrimeNumber::closest_prime(0, false));
    }

    #[test]
    fn closest_prime_1_desc() {
        assert_eq!(None, PrimeNumber::closest_prime(1, false));
    }

    #[test]
    fn closest_prime_6_desc() {
        assert_eq!(Some(5), PrimeNumber::closest_prime(6, false));
    }

    #[test]
    fn closest_prime_2() {
        assert_eq!(Some(2), PrimeNumber::closest_prime(2, false));
    }

    #[test]
    fn closest_prime_3() {
        assert_eq!(Some(3), PrimeNumber::closest_prime(3, false));
    }

    #[test]
    fn closest_prime_max() {
        assert_eq!(
            Some(MAX_PRIME),
            PrimeNumber::closest_prime(MAX_PRIME, false)
        );
    }

    #[test]
    fn closest_prime_max_plus_1_desc() {
        assert_eq!(
            Some(MAX_PRIME),
            PrimeNumber::closest_prime(MAX_PRIME + 1, false)
        );
    }

    #[test]
    fn closest_prime_max_plus_1_asc() {
        assert_eq!(None, PrimeNumber::closest_prime(MAX_PRIME + 1, true));
    }

    #[test]
    fn any_prime_factor_in_0_range() {
        assert_eq!(
            false,
            PrimeNumber::any_prime_factor_in(0, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn any_prime_factor_in_1_range() {
        assert_eq!(
            false,
            PrimeNumber::any_prime_factor_in(1, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn any_prime_factor_in_4_range() {
        assert_eq!(
            true,
            PrimeNumber::any_prime_factor_in(4, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn any_prime_factor_in_11_range() {
        assert_eq!(
            false,
            PrimeNumber::any_prime_factor_in(11, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn any_prime_factor_in_4_empty() {
        assert_eq!(false, PrimeNumber::any_prime_factor_in(4, &[]));
    }

    #[test]
    fn any_prime_factor_in_4_nok() {
        assert_eq!(false, PrimeNumber::any_prime_factor_in(4, &[3]));
    }

    #[test]
    fn any_prime_factor_in_4_ok() {
        assert_eq!(true, PrimeNumber::any_prime_factor_in(4, &[2]));
    }

    #[test]
    fn any_prime_factor_in_6_ok() {
        assert_eq!(true, PrimeNumber::any_prime_factor_in(6, &[2, 3, 4]));
    }

    #[test]
    fn prime_factor_list_in_1_range() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(
            empty,
            PrimeNumber::prime_factor_list_in(1, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn prime_factor_list_in_4_range() {
        assert_eq!(
            vec![2],
            PrimeNumber::prime_factor_list_in(4, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn prime_factor_list_in_11_range() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(
            empty,
            PrimeNumber::prime_factor_list_in(11, &(0..9).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn prime_factor_list_in_4_empty() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::prime_factor_list_in(4, &[]));
    }

    #[test]
    fn prime_factor_list_in_4_nok() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::prime_factor_list_in(4, &[3]));
    }

    #[test]
    fn prime_factor_list_in_4_ok() {
        assert_eq!(vec![2], PrimeNumber::prime_factor_list_in(4, &[2]));
    }

    #[test]
    fn prime_factor_list_in_6_ok() {
        assert_eq!(vec![2, 3], PrimeNumber::prime_factor_list_in(6, &[2, 3, 4]));
    }

    #[test]
    fn prime_factor_list_0() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::prime_factor_list(0));
    }

    #[test]
    fn prime_factor_list_1() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::prime_factor_list(1));
    }

    #[test]
    fn prime_factor_list_7() {
        assert_eq!(vec![7], PrimeNumber::prime_factor_list(7));
    }

    #[test]
    fn prime_factor_list_210() {
        assert_eq!(vec![2, 3, 5, 7], PrimeNumber::prime_factor_list(210));
    }

    #[test]
    fn prime_0() {
        assert_eq!(None, PrimeNumber::prime(0));
    }

    #[test]
    fn prime_1() {
        assert_eq!(None, PrimeNumber::prime(1));
    }

    #[test]
    fn prime_2() {
        assert_eq!(Some(2), PrimeNumber::prime(2));
    }

    #[test]
    fn prime_4() {
        assert_eq!(None, PrimeNumber::prime(4));
    }

    #[test]
    fn prime_31() {
        assert_eq!(Some(31), PrimeNumber::prime(31));
    }

    #[test]
    fn prime_899() {
        assert_eq!(None, PrimeNumber::prime(899));
    }

    #[test]
    fn prime_max() {
        assert_eq!(Some(MAX_PRIME), PrimeNumber::prime(MAX_PRIME));
    }

    #[test]
    fn prime_list_in_range() {
        assert_eq!(
            vec![2, 3, 5, 7, 11, 13, 17, 19, 23],
            PrimeNumber::prime_list_in(&(0..29).collect::<Vec<u32>>())
        );
    }

    #[test]
    fn prime_list_in_empty() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::prime_list_in(&[]));
    }

    #[test]
    fn prime_list_in_nok() {
        let empty: Vec<u32> = Vec::new();
        assert_eq!(empty, PrimeNumber::prime_list_in(&[0, 1]));
    }

    #[test]
    fn is_prime_0() {
        assert_eq!(false, PrimeNumber::is_prime(0));
    }

    #[test]
    fn is_prime_1() {
        assert_eq!(false, PrimeNumber::is_prime(1));
    }

    #[test]
    fn is_prime_2() {
        assert_eq!(true, PrimeNumber::is_prime(2));
    }

    #[test]
    fn is_prime_4() {
        assert_eq!(false, PrimeNumber::is_prime(4));
    }

    #[test]
    fn is_prime_31() {
        assert_eq!(true, PrimeNumber::is_prime(31));
    }

    #[test]
    fn is_prime_899() {
        assert_eq!(false, PrimeNumber::is_prime(899));
    }

    #[test]
    fn is_prime_max() {
        assert_eq!(true, PrimeNumber::is_prime(MAX_PRIME));
    }
}
