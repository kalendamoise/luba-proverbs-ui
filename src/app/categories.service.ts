import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categorisUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categorisUrl, httpOptions)
      .pipe(
        tap(_ => this.log('fetched categories')),
        catchError(this.handleError('getCategories', []))
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CategoriesService: ${message}`);
  }
}
