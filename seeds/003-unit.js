
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('unit_type').insert([
        {name: 'Kilogram'},
        {name: 'Box'},
        {name: 'Piece'}
      ]);
    });
};
