import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { isEven, isOdd, PrimeNumber } from 'primes-rs/pkg/primes';

interface Module {
  PrimeNumber: typeof PrimeNumber;
  isOdd: typeof isOdd;
  isEven: typeof isEven;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  module = new BehaviorSubject<Module>(null);

  constructor() {
    const appComp = this;
    import('primes-rs/pkg/primes')
      .then((mod: Module) => {
        appComp.module.next(mod);
      })
      .catch(console.error);
  }

  public primeRangeList(begin: number, end: number): Observable<Uint32Array> {
    return this.run((mod) => mod.PrimeNumber.rangeList(begin, end));
  }

  public nthPrimeNumber(input: number): Observable<number | undefined> {
    return this.run((mod) => mod.PrimeNumber.nth(input));
  }

  public randomPrimeInRange(begin: number, end: number): Observable<number | undefined> {
    return this.run((mod) => mod.PrimeNumber.randomRange(begin, end));
  }

  public randomPrimeNumber(): Observable<number | undefined> {
    return this.run((mod) => mod.PrimeNumber.random());
  }

  public closestPrime(input: number, asc: boolean): Observable<number | undefined> {
    return this.run((mod) => mod.PrimeNumber.closestPrime(input, asc));
  }

  public primeNumber(input: number): Observable<number | undefined> {
    return this.run((mod) => mod.PrimeNumber.prime(input));
  }

  public isPrimeNumber(input: number): Observable<boolean> {
    return this.run((mod) => mod.PrimeNumber.isPrime(input));
  }

  public isEven(input: number): Observable<boolean> {
    return this.run((mod) => mod.isEven(input));
  }

  public isOdd(input: number): Observable<boolean> {
    return this.run((mod) => mod.isOdd(input));
  }

  private run<T>(f: (mod: Module) => T): Observable<T> {
    return this.module.pipe(
      filter(value => value !== null),
      map(f)
    );
  }
}
