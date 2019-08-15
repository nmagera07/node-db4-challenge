
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()

      tbl.string('recipe_name', 255).notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments()

      tbl.string('ingredientName', 255).notNullable()
  })
  .createTable('recipeIngredients', tbl => {
      tbl.increments()

      tbl.string('ingredient_quantity', 250).notNullable()
      tbl
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl
        .integer('ingredientId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })
  .createTable('instructions', tbl => {
      tbl.increments()

      tbl.integer('stepNumber')
      tbl.string('instructions')
      tbl
        .integer('recipeInstructionsId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipeIngredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
