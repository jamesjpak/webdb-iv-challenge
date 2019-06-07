
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        // pk called id, auto-increments, integer
        table.increments();
    
        // a varchar called name, 128, unique, not null
        table
          .string('name', 128)
          .notNullable()
          .unique();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
