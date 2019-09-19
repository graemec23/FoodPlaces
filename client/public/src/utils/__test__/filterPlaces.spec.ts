import filteredFoodPlaces from "../filterPlaces";

describe("tests users", () => {

  const venues = [
    {
      "name": "Twin Dynasty",
      "food": [
        "Chinese"
      ],
      "drinks": [
        "Soft Drinks",
        "Rum",
        "Beer",
        "Whisky",
        "Cider"
      ]
    },
    {
      "name": "Spice of life",
      "food": [
        "Eggs",
        "Meat",
        "Fish",
        "Pasta",
        "Dairy"
      ],
      "drinks": [
        "Vokda",
        "Gin",
        "whisky",
        "Rum",
        "Cider",
        "Beer",
        "Soft drinks"
      ]
    },
  ];

  const user = [
    {
      "name": "John Davis",
      "wont_eat": [
        "Fish",
      ],
      "drinks": [
        "Cider",
        "Rum",
        "Soft drinks"
      ]
    },
  ];

  describe("generateToken", () => {
    test("creates new jwt from user", () => {
      const places = filteredFoodPlaces(venues, user);
      console.log("place", places.filter((venue) => !venue.avoid));
    });
  });

});
