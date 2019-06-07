
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', table => {
      table.increments();
      table.string('name', 128).notNullable().unique()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient');
};
