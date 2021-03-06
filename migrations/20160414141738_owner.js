exports.up = function(knex, Promise) {
  return knex.schema.createTable('owner', function(table) {
    table.increments();
    table.string('owner_email').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.string('password');
    table.integer('phone_number');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owner');
};