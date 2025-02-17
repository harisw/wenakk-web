export function getDummyData() {
  const dummmies = [
    {
      filename: "/placeholder-1.webp",
      caption: "QUICK AND EASY",
    },
    {
      filename: "/placeholder-2.webp",
      caption: "DINNER",
    },
    {
      filename: "/placeholder-3.webp",
      caption: "VEGETARIAN",
    },
    {
      filename: "/placeholder-4.jpg",
      caption: "HEALTHY",
    },
    {
      filename: "/placeholder-1.webp",
      caption: "INSTANT POT",
    },
    {
      filename: "/placeholder-2.webp",
      caption: "VEGAN",
    },
    {
      filename: "/placeholder-3.webp",
      caption: "MEAL PREP",
    },
    {
      filename: "/placeholder-4.jpg",
      caption: "SOUPS",
    },
    {
      filename: "/placeholder-1.webp",
      caption: "Breakfast",
    },
    {
      filename: "/placeholder-2.webp",
      caption: "Spicy",
    },
    {
      filename: "/placeholder-3.webp",
      caption: "Chicken",
    },
    {
      filename: "/placeholder-4.jpg",
      caption: "Holiday Series",
    },
  ];
  return dummmies[getRandomIntInrange(0, dummmies.length - 1)];
}

export function getRandomIntInrange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNRandomIntegersInRange(min: number, max: number, n: number) {
  const randomInt = [];
  for (let i = 0; i < n; i++) {
    randomInt.push(getRandomIntInrange(min, max));
  }
  return randomInt;
}

export function getRandomFloatInRange(min: number, max: number) {
  if (min < 0 || max < 0) throw new Error("Range must be non-negative");
  if (min > max) throw new Error("Min must be less than or equal to Max");

  const randomFloat = Math.random() * (max - min) + min;
  return parseFloat(randomFloat.toFixed(1)); // ✅ Ensures one decimal place
};