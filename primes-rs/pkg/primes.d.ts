/* tslint:disable */
/* eslint-disable */

export class PrimeNumber {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static anyPrimeFactorIn(num: number, divisors: Uint32Array): boolean;
    static closestPrime(num: number, asc: boolean): number | undefined;
    static filterPrimes(list: Uint32Array): Uint32Array;
    static isPrime(num: number): boolean;
    static nth(n: number): number | undefined;
    static prime(num: number): number | undefined;
    static primeFactorList(num: number): Uint32Array;
    static primeFactorListIn(num: number, divisors: Uint32Array): Uint32Array;
    static random(): number | undefined;
    static randomRange(begin: number, end: number): number | undefined;
    static rangeList(begin: number, end: number): Uint32Array;
}

export function anyFactorIn(num: number, divisors: Uint32Array): boolean;

export function factorList(num: number): Uint32Array;

export function factorListIn(num: number, divisors: Uint32Array): Uint32Array;

export function isEven(num: number): boolean;

export function isFactor(num: number, divisor: number): boolean;

export function isOdd(num: number): boolean;

export function sqrt(num: number): number;
