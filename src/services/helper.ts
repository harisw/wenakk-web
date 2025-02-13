const dummmies = [
  {
    filename: "placeholder-1.webp",
    caption: "QUICK AND EASY",
  },
  {
    filename: "placeholder-2.webp",
    caption: "DINNER",
  },
  {
    filename: "placeholder-3.webp",
    caption: "VEGETARIAN",
  },
  {
    filename: "placeholder-4.jpg",
    caption: "HEALTHY",
  },
  {
    filename: "placeholder-1.webp",
    caption: "INSTANT POT",
  },
  {
    filename: "placeholder-2.webp",
    caption: "VEGAN",
  },
  {
    filename: "placeholder-3.webp",
    caption: "MEAL PREP",
  },
  {
    filename: "placeholder-4.jpg",
    caption: "SOUPS",
  },
  {
    filename: "placeholder-1.webp",
    caption: "Breakfast",
  },
  {
    filename: "placeholder-2.webp",
    caption: "Spicy",
  },
  {
    filename: "placeholder-3.webp",
    caption: "Chicken",
  },
  {
    filename: "placeholder-4.jpg",
    caption: "Holiday Series",
  },
];

function getDummyData() {
  return dummmies[getRandomIntInrange(0, dummmies.length - 1)];
}

function getRandomIntInrange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNRandomIntegersInRange(min: number, max: number, n: number) {
  const randomInt = [];
  for (let i = 0; i < n; i++) {
    randomInt.push(getRandomIntInrange(min, max));
  }
  return randomInt;
}



export const helper = {
  getRandomIntInrange,
  getNRandomIntegersInRange,
  getDummyData
}