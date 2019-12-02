import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Proverb } from "../proverb";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ProverbService } from "../proverb.service";

@Component({
  selector: "app-proverb-detail",
  templateUrl: "./proverb-detail.component.html",
  styleUrls: ["./proverb-detail.component.css"]
})
export class ProverbDetailComponent implements OnInit, OnChanges {
  @Input() proverb: Proverb;

  constructor(
    private route: ActivatedRoute,
    private proverbService: ProverbService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProverb();
  }

  getProverb(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    if (id !== 0) {
      this.proverbService
        .getProverb(id)
        .subscribe(proverb => (this.proverb = proverb));
    }
  }

  save(): void {
    this.proverbService
      .updateProverb(this.proverb)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onLike(): void {
    this.proverb.likes += 1;
  }
}
