import { Component, OnInit } from "@angular/core";
import { Proverb } from "../proverb";
import { ProverbService } from "../proverb.service";
import { CategoriesService } from '../categories.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  proverbs: Proverb[] = [];
  categories = [];
  categories_dict: { [id: number]: string; } = {};

  constructor(private proverbService: ProverbService,  private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getCategories();
    this.getProverbs();
  }

  getProverbs(): void {
    this.proverbService.getProverbs().subscribe(
      proverbs => {
        this.proverbs = proverbs.filter(value => {
          console.log("Filter value with hight likes");
          if (value.likes > 10) {
            console.log(value);
            return value;
          }
        });
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
