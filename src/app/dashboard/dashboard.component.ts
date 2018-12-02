import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';
import { ProverbService } from '../proverb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  proverbs: Proverb[];

  constructor(private proverbService: ProverbService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.proverbService.getProverbs()
      .subscribe(proverbs => this.proverbs = proverbs.slice(1, 5));
  }

}
