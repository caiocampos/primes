use primes::factor::{factor_list, factor_list_in};
use primes::prime::PrimeNumber;
use primes::util::is_even;
use primes::util::is_odd;

const U32_MAX: u32 = std::u32::MAX;

fn main() {
    (0..15).chain(U32_MAX - 4..=U32_MAX).for_each(|i| {
        let (is_even, is_odd, nth, is_prime, prime) = (
            is_even(i),
            is_odd(i),
            PrimeNumber::nth(i),
            PrimeNumber::is_prime(i),
            PrimeNumber::prime(i),
        );
        println!(
            "{} is even? {},\t is odd? {},\t {}nth: {:?},\t is prime? {},\t {:?}",
            i, is_even, is_odd, i, nth, is_prime, prime
        );
    });
    (0..20).for_each(|i| {
        let factors = factor_list(i);
        println!("factor list of {}\t {:?}", i, factors);
    });
    {
        let process_candidates = |limit: u32, candidates: &[u32]| {
            println!("candidates: {:?}", candidates);
            (0..=limit).for_each(|i| {
                let factors = factor_list_in(i, candidates);
                println!("factor list of {}\t in candidates\t {:?}", i, factors);
            });
        };
        process_candidates(20, &[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        process_candidates(3, &[0]);
        process_candidates(3, &[1]);
    }
    println!("{}th prime: {:?}", 9, PrimeNumber::nth(8));
    println!("random prime: {:?}", PrimeNumber::random());
    {
        let overflow = |value: u32, asc: bool, desc: &str| {
            println!(
                "overflow {} prime: {:?}",
                desc,
                PrimeNumber::closest_prime(value, asc)
            );
        };
        overflow(0, false, "min");
        overflow(U32_MAX, true, "max");
    }
    {
        let random_range = |n: u32, m: u32| -> String {
            let r = PrimeNumber::random_range(n, m);
            format!("a prime between {} and {}: {:?}", n, m, r)
        };
        let range_list = |n: u32, m: u32| -> String {
            let r = PrimeNumber::range_list(n, m);
            format!("primes between {} and {}: {:?}", n, m, r)
        };
        let (a, b, c) = (900, 999, 953);

        println!("{}", range_list(a, a));
        println!("{}", range_list(b, b));
        println!("{}", range_list(b, a));
        println!("{}", range_list(a, b));
        println!("{}", range_list(a, c));
        println!("{}", range_list(c, b));
        println!("{}", range_list(c, c));

        println!("{}", random_range(a, a));
        println!("{}", random_range(b, b));
        println!("{}", random_range(b, a));
        println!("{}", random_range(a, b));
        println!("{}", random_range(a, c));
        println!("{}", random_range(c, b));
        println!("{}", random_range(c, c));
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        main();
    }
}
