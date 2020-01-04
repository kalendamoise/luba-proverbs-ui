import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef
} from "@angular/core";
import { Proverb } from "../proverb";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Location } from "@angular/common";

import { ProverbService } from "../proverb.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-proverb-detail",
  templateUrl: "./proverb-detail.component.html",
  styleUrls: ["./proverb-detail.component.css"]
})
export class ProverbDetailComponent implements OnInit {
  @Input() proverb: Proverb;
  @Input() caterories: { [id: number]: string; } = {};

  constructor(
    private route: ActivatedRoute,
    private proverbService: ProverbService,
    private location: Location,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.getProverb();
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe(() => {
      this.cd.markForCheck();
    });
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
    // this.location.back();
  }

  navigateTo(item){
    console.log("the item value is: " + item);
    this.router.navigateByUrl('/proverbs/' + item);
  }

  onLike(): void {
    this.proverb.likes += 1;
    this.save();
  }
}
