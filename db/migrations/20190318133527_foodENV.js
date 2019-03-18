
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_env', table=>{
    table.increments()
    table.string('category')
    table.string('usda')
    table.decimal('land')
    table.decimal('water')
    table.decimal('ghg')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_env')
};
