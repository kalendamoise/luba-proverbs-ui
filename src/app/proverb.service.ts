import { Injectable } from '@angular/core';
import { Proverb } from './proverb';
import { PROVERBS } from './mock-provers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProverbService {

  constructor(private messageService: MessageService) { }

  getProverbs(): Observable<Proverb[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(PROVERBS);
  }
}
