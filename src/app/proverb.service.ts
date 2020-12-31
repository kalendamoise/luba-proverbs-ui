import { Injectable } from '@angular/core';
import { Proverb } from './proverb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class ProverbService {
  private proverbsUrl = environment.apiUrl + '/proverbs';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getProverbs(): Observable<Proverb[]> {
    this.messageService.add('ProverbService: fetched proverbs');

    return this.http.get<Proverb[]>(this.proverbsUrl, httpOptions)
      .pipe(
        tap(_ => this.log('fetched proverbs')),
        catchError(this.handleError('getProverbs', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET proverb by id. Will 404 if id not found */
  getProverb(id: number): Observable<Proverb> {
    const url = `${this.proverbsUrl}/${id}`;
    return this.http.get<Proverb>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched proverb id=${id}`)),
      catchError(this.handleError<Proverb>(`getProverb id=${id}`))
    );
  }

  /** PUT: update the proverb on the server */
  updateProverb (proverb: Proverb): Observable<any> {
    return this.http.put(this.proverbsUrl, proverb, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${proverb.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProverbService: ${message}`);
  }
}
