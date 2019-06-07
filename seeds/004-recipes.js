
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Teeny Tacos', dish_id: 1 },
        {name: 'Pickled Pizza', dish_id: 2 },
        {name: 'Salami Sushi', dish_id: 3 }
      ]);
    });
};
