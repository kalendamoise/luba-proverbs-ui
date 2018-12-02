import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';
import { PROVERBS } from '../mock-provers';

@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.css']
})
export class ProverbsComponent implements OnInit {
  proverb: Proverb = {
    id: 1,
    originalText: 'Kujinga mpala ke bukulu. I musongo wa nzala walwa nao.',
    englishText: 'Wrinkling the forhead does not make one grown up.',
    englishMeaning: 'It is wrestling with the pains of hunger. \
    His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
    Experience counts more than years.',
    frenchText: '',
    frenchMeaning: ''
  };

  proverbs = PROVERBS;
  seletedProverb: Proverb;

  constructor() { }

  ngOnInit() {
  }

  onSelect(proverb: Proverb): void {
    this.seletedProverb = proverb;
  }

}
