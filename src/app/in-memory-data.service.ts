import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Proverb } from "./proverb";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
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
        quategory: []
      }
    ];
    return { proverbs };
  }

  genId(proverbs: Proverb[]): number {
    return proverbs.length > 0
      ? Math.max(...proverbs.map(proverb => proverb.id)) + 1
      : 9;
  }
}
