
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', table => {
        
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        table.float('measurement')

        table.integer('unit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('unit_type')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipe_ingredients');
  };
  