import { Component, OnInit, Input } from '@angular/core';
import { Proverb } from '../proverb';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProverbService } from '../proverb.service';

@Component({
  selector: 'app-proverb-detail',
  templateUrl: './proverb-detail.component.html',
  styleUrls: ['./proverb-detail.component.css']
})
export class ProverbDetailComponent implements OnInit {
  @Input() proverb: Proverb;

  constructor(
    private route: ActivatedRoute,
    private proverbService: ProverbService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.proverbService.getProverb(id)
      .subscribe(proverb => this.proverb = proverb);
  }

  save(): void {
    this.proverbService.updateProverb(this.proverb)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
