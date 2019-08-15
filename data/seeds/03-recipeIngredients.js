
exports.seed = function(knex) {
      return knex('recipeIngredients').insert([
        { ingredientQuantity: '2 lbs', recipeId: '1', ingredientId: '1' },
        { ingredientQuantity: '1 cup', recipeId: '1', ingredientId: '2' },
        { ingredientQuantity: '1 lb', recipeId: '2', ingredientId: '3' },
        { ingredientQuantity: '1 cup', recipeId: '2', ingredientId: '4'},
        { ingredientQuantity: '16 oz', recipeId: '2', ingredientId: '5' },
        { ingredientQuantity: '3 shells', recipeId: '3', ingredientId: '6' },
        { ingredientQuantity: '1 lb', recipeId: '3', ingredientId: '7' },
      ]);
};
