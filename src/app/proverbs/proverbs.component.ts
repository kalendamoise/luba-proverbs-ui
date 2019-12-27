import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Proverb } from "../proverb";
import { ProverbService } from "../proverb.service";
import {CATEGORIES } from "../../category_list";

@Component({
  selector: "app-proverbs",
  templateUrl: "./proverbs.component.html",
  styleUrls: ["./proverbs.component.css"]
})
export class ProverbsComponent implements OnInit {
  proverbs: Proverb[] =  [];
  selectedCategory = 'All';
  categories = CATEGORIES;
  categories_dict: { [id: number]: string; } = {};

  constructor(private proverbService: ProverbService) {
    this.categories.forEach((item , index) => {
      this.categories_dict[index] = item;
    });
  }

  ngOnInit() {
    this.getProverbs();
  }

  addCategoris(): void {
    this.proverbs.forEach(item => {
      item.quategory.push(Math.floor(Math.random() * this.proverbs.length));
      item.quategory.push(Math.floor(Math.random() * this.proverbs.length));
      console.log('Item is: ' + JSON.stringify(item));
    });
  }

  getProverbs(): void {
    this.proverbService
      .getProverbs()
      .subscribe(items => {
        this.proverbs = items;
        this.addCategoris();
      });
  }
}
