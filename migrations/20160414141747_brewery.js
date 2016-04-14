exports.up = function(knex, Promise) {
  return knex.schema.createTable('brewery', function(table) {
    table.increments();
    table.integer('owner_id');
    table.string('name').notNullable();
    table.integer('phone_integer').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip').notNullable();
    table.string('description');
    table.integer('timeOpenSun');
    table.integer('timeClosedSun');
    table.integer('timeOpenMon');
    table.integer('timeClosedMon');
    table.integer('timeOpenTue');
    table.integer('timeClosedTue');
    table.integer('timeOpenWed');
    table.integer('timeClosedWed');
    table.integer('timeOpenTh');
    table.integer('timeClosedTh');
    table.integer('timeOpenFri');
    table.integer('timeClosedFri');
    table.integer('timeOpenSat');
    table.integer('timeClosedSat');
    table.bool('in_house');
    table.bool('food_truck');
    table.bool('food_available');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brewery');
};