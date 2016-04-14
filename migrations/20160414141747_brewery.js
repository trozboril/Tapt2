exports.up = function(knex, Promise) {
  return knex.schema.createTable('brewery', function(table) {
    table.increments();
    table.integer('owner_id').required();
    table.string('name').required();
    table.number('phone_number').required();
    table.string('address').required();
    table.string('city').required();
    table.string('state').required();
    table.number('zip').required();
    table.string('description');
    table.number('timeOpenSun');
    table.number('timeClosedSun');
    table.number('timeOpenMon');
    table.number('timeClosedMon');
    table.number('timeOpenTue');
    table.number('timeClosedTue');
    table.number('timeOpenWed');
    table.number('timeClosedWed');
    table.number('timeOpenTh');
    table.number('timeClosedTh');
    table.number('timeOpenFri');
    table.number('timeClosedFri');
    table.number('timeOpenSat');
    table.number('timeClosedSat');
    table.bool('in_house');
    table.bool('food_truck');
    table.bool('food_available');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brewery');
};