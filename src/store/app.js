// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    hairColor: "#C700FF",
    hairStyle: 2,
    eyeColor: "#57c14c",
    skinColor: "#25140b",
    glassesColor: "#ed2087",
    glassesStyle: 2,
    backgroundShape: 1,
    backgroundColor: "#ee2b4e",

    hairColors: [
      "#181313",
      "#53391c",
      "#6d4021",
      "#8c2825",
      "#efaf62",
      "#e4e1ce",
    ],
    hairStyles: [1, 2, 3, 4],
    eyeColors: [
      "#1c1312",
      "#3b2113",
      "#944921",
      "#999a9c",
      "#907338",
      "#85481f",
      "#a1504d",
      "#b6c4e0",
      "#6c6350",
      "#666552",
      "#b1b43e",
      "#4bb448",
      "#7e7952",
      "#5c574a",
      "#55513c",
      "#4c72d3",
      "#525156",
      "#7a8e92",
      "#a3d6cd",
      "#6649e7",
    ],
    skinColors: [
      "#25140b",
      "#e1af90",
      "#47230f",
      "#fdd6c2",
      "#944921",
      "#e3a669",
    ],
    glassesColors: [
      "#ed2087",
      "#e8b947",
      "#e9d49f",
      "#7ebee8",
      "#221f20",
      "#db4052",
    ],
    glassesStyles: [1, 2, 3, 4],
    backgroundColors: [
      "#d67977",
      "#ae6cc2",
      "#7c85c6",
      "#70c0f2",
      "#efbecf",
      "#f1f4c7",
      "#56bca5",
      "#69b3ad",
      "#b6d48b",
      "#fdf188",
      "#f4b960",
      "#cec5e6",
      "#fbecba",
      "#9b1ff6",
      "#9d887f",
      "#94a3ac",
      "#b63830",
      "#612194",
      "#c2ddf8",
      "#f7cebe",
      "#2c348f",
      "#3375b8",
      "#2c675c",
      "#618a3c",
      "#bee9f2",
      "#b9aba5",
      "#edab46",
      "#df742d",
      "#4b3530",
      "#3a474f",
      "#cee5cc",
      "#d2fd51",
    ],
    backgroundStyles: [1, 2, 3, 4],
  }),
  getters: {
    //doubleCount: (state) => state.count * 2,
  },
  actions: {
    randomizeAva() {
      this.hairColor =
        this.hairColors[Math.floor(Math.random() * this.hairColors.length)];
      this.hairStyle =
        this.hairStyles[Math.floor(Math.random() * this.hairStyles.length)];
      this.eyeColor =
        this.eyeColors[Math.floor(Math.random() * this.eyeColors.length)];
      this.glassesColor =
        this.glassesColors[
          Math.floor(Math.random() * this.glassesColors.length)
        ];
      this.glassesStyle =
        this.glassesStyles[
          Math.floor(Math.random() * this.glassesStyles.length)
        ];
      this.skinColor =
        this.skinColors[Math.floor(Math.random() * this.skinColors.length)];

      this.backgroundColor =
        this.backgroundColors[
          Math.floor(Math.random() * this.backgroundColors.length)
        ];
      this.backgroundShape =
        this.backgroundStyles[
          Math.floor(Math.random() * this.backgroundStyles.length)
        ];
    },
  },
  persist: true,
});
