import { Component, OnInit } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { isEven, isOdd, PrimeNumber } from '@caiocampos/primes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ready = new BehaviorSubject<boolean>(false);
  title = 'primes';
  module: {
    PrimeNumber: typeof PrimeNumber,
    isOdd: typeof isOdd,
    isEven: typeof isEven
  };

  ngOnInit(): void {
    import('@caiocampos/primes')
      .then(mod => {
        this.ready.next(true);
        this.module = mod;
      })
      .catch(console.error);
  }

  public nthPrimeNumber(input: number): Observable<number> {
    return this.ready.pipe(
      filter(value => value),
      map(() => {
        return this.module.PrimeNumber.nth(input);
      })
    );
  }

  public primeRangeList(begin: number, end: number): Observable<Uint32Array> {
    return this.ready.pipe(
      filter(value => value),
      map(() => {
        return this.module.PrimeNumber.rangeList(begin, end);
      })
    );
  }

  public isPrimeNumber(input: number): Observable<boolean> {
    return this.ready.pipe(
      filter(value => value),
      map(() => {
        return this.module.PrimeNumber.isPrime(input);
      })
    );
  }

  public isEven(input: number): Observable<boolean> {
    return this.ready.pipe(
      filter(value => value),
      map(() => {
        return this.module.isEven(input);
      })
    );
  }

  public isOdd(input: number): Observable<boolean> {
    return this.ready.pipe(
      filter(value => value),
      map(() => {
        return this.module.isOdd(input);
      })
    );
  }
}
