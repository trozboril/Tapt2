exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', function(table) {
    table.increments();
    table.string('type');
    table.string('name');
    table.float('abv');
    table.float('ibu');
    table.string('description');
    table.integer('brewery_id');
    table.bool('on_tap');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer');
};