import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AppService } from './app.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Primes';
  range = [...Array(90).keys()];
  rangeBegin = 0;
  rangeEnd = 99999;
  randomPrime = 3;
  randomPrimeRng = 3;

  constructor(private app: AppService) {}

  public primeRangeList(begin: number, end: number): Observable<Uint32Array> {
    return this.app.primeRangeList(begin, end);
  }

  public randomPrimeNumber(): Observable<number | undefined> {
    return this.app.randomPrimeNumber();
  }

  public closestPrime(
    input: number,
    asc: boolean
  ): Observable<number | undefined> {
    return this.app.closestPrime(input, asc);
  }

  public isPrimeNumber(input: number): Observable<boolean> {
    return this.app.isPrimeNumber(input);
  }
}
