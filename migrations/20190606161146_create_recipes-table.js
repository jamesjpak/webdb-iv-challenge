
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments();
        table.string('name', 128).notNullable().unique();
        table.integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes');
  };
  