
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()

      tbl.string('recipeName', 255).notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments()

      tbl.string('ingredientName', 255).notNullable()
  })
  .createTable('recipeIngredients', tbl => {
      tbl.increments()

      tbl.string('ingredientQuantity', 250).notNullable()
      tbl
        .integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('ingredientId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('instructions', tbl => {
      tbl.increments()

      tbl.integer('stepNumber', 5000).notNullable()
      tbl.string('instructions', 250).notNullable()
      tbl
        .integer('recipeInstructionsId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
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
