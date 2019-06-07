
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'Beef'},
        {name: 'Pepperoni'},
        {name: 'Salami'},
        {name: 'Tortilla'},
      ]);
    });
};
