import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Proverb } from "./proverb";
import { CATEGORIES } from  "./category_list";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories: string[] = CATEGORIES;

    const proverbs: Proverb[] = [
      {
        id: 1,
        originalText: "Kujinga mpala ke bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 23,
        shared: 0,
        quategory: [0, 1]
      },
      {
        id: 2,
        originalText: "I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [2, 3]
      },
      {
        id: 3,
        originalText: "Mpala ke bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [4, 5]
      },
      {
        id: 4,
        originalText: "I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [5, 6]
      },
      {
        id: 5,
        originalText: "Kujinga mpala ke bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [8, 9]
      },
      {
        id: 6,
        originalText: "Kujinga mpala ke bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [9, 10]
      },
      {
        id: 7,
        originalText: "Kujinga mpala ke bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [11, 13]
      },
      {
        id: 8,
        originalText: "Ke bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 34,
        shared: 0,
        quategory: [0, 1]
      },
      {
        id: 9,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [3, 2]
      },
      {
        id: 10,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [1, 0]
      },
      {
        id: 11,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [11, 23]
      },
      {
        id: 12,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [0, 10]
      },
      {
        id: 13,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [42, 2]
      },
      {
        id: 14,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 34,
        shared: 0,
        quategory: [2, 6]
      },
      {
        id: 15,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [7, 9]
      },
      {
        id: 16,
        originalText: "I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
         Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [2, 3]
      },
      {
        id: 17,
        originalText: "Bukulu. I musongo wa nzala walwa nao.",
        englishText: "Wrinkling the forhead does not make one grown up.",
        englishMeaning:
          "It is wrestling with the pains of hunger. \
        His forhead is not wrinkled through age, but through hunger, anxiety and the hard knocks of life \
        Experience counts more than years.",
        frenchText: "",
        frenchMeaning: "",
        likes: 0,
        shared: 0,
        quategory: [0, 10]
      }
    ];
    return { proverbs, categories };
  }

  genId(proverbs: Proverb[]): number {
    return proverbs.length > 0
      ? Math.max(...proverbs.map(proverb => proverb.id)) + 1
      : 9;
  }
}
