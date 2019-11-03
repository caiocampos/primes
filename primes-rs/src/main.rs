use primes::prime::PrimeNumber;
use primes::util::is_even;
use primes::util::is_odd;

fn main() {
    (0..8).for_each(|i| {
        let (is_even, is_odd, is_prime, prime) = (
            is_even(i),
            is_odd(i),
            PrimeNumber::is_prime(i),
            PrimeNumber::prime(i),
        );
        println!(
            "{} is even? {},\t is odd? {},\t is prime? {},\t {:?}",
            i, is_even, is_odd, is_prime, prime
        );
    });
    println!("{}th prime: {:?}", 9, PrimeNumber::nth(8));
    println!("random prime: {:?}", PrimeNumber::random());
    {
        let random_range = |n, m| -> String {
            let r = PrimeNumber::random_range(n, m);
            format!("a prime between {} and {}: {:?}", n, m, r)
        };
        let range_list = |n, m| -> String {
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
