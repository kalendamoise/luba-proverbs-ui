import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Proverb } from "../proverb";
import { ProverbService } from "../proverb.service";
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-proverbs",
  templateUrl: "./proverbs.component.html",
  styleUrls: ["./proverbs.component.css"]
})
export class ProverbsComponent implements OnInit {
  proverbs: Proverb[] =  [];
  selectedCategory = 'All';
  categories = [];
  categories_dict: { [id: number]: string; } = {};

  constructor(private route: ActivatedRoute, private proverbService: ProverbService, private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getProverbs();
  }

  getProverbs(): void {
    const category = this.route.snapshot.paramMap.get('category');

    this.proverbService
      .getProverbs()
      .subscribe(items => {
        this.proverbs = items;
        if (category != null) {
          this.selectedCategory = this.categories[category];
          this.proverbs = items.filter(item => item.quategory.includes(+category));
        }
      });
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe( items => {
      this.categories = items;

      this.categories.forEach((item , index) => {
        this.categories_dict[index] = item;
      });

    });
  }
}
