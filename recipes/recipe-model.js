const db = require('../data/db-config')

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes')
        .innerJoin('recipeIngredients', 'recipes.id', 'recipeIngredients.recipe_id')
        .innerJoin('ingredients', 'recipeIngredients.ingredient_id', 'ingredients.id')
        .select('recipes.recipe_name', 'ingredients.ingredient_name', 'recipeIngredients.quantity')
        .where({ recipe_id })
}

function getInstructions(recipe_id) {
    return db('recipes')
        .innerJoin('recipeIngredients', 'recipes.id', 'recipeIngredients.recipe_id')
        .innerJoin('instructions', 'instructions.id', 'recipeIngredients.id')
        .select('recipes.recipe_name', 'recipeIngredients.quantity', 'instructions.step_number', 'instructions.instructions')
        .where({ recipe_id })
        .orderBy('instructions.step_number')
}



module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,

}