Posting User to firebase ->
let userData = {name: "Heena", number:"6154561234", email:"test@test.com"};
    await postUser(userData);

Posting Food to fireBase ->
let foodData = {type: "chinese",
      servings: "4",
      location: {Latitude: 20,
        Longitude: 30},
      address: "123 Second Street Columbia TN",
      prepDate: new Date(),
      allergens: []
    };

      await postFood(foodData);


