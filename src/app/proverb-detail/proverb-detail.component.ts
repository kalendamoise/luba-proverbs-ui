import { Component, OnInit, Input } from '@angular/core';
import { Proverb } from '../proverb';

@Component({
  selector: 'app-proverb-detail',
  templateUrl: './proverb-detail.component.html',
  styleUrls: ['./proverb-detail.component.css']
})
export class ProverbDetailComponent implements OnInit {
  @Input() proverb: Proverb;

  constructor() { }

  ngOnInit() {
  }

}
