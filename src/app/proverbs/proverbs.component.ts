import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';
import { ProverbService } from '../proverb.service';

@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.css']
})
export class ProverbsComponent implements OnInit {

  proverbs: Proverb[];
  seletedProverb: Proverb;

  constructor(private proverbService: ProverbService) { }

  ngOnInit() {
    this.getProverbs();
  }

  getProverbs(): void {
    this.proverbService.getProverbs().subscribe(proverbs => this.proverbs = proverbs);
  }

  onSelect(proverb: Proverb): void {
    this.seletedProverb = proverb;
  }

}
