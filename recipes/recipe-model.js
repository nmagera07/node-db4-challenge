const db = require('../data/db-config')

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipeId) {
    return db('recipes')
        .innerJoin('recipeIngredients', 'recipes.id', 'recipeIngredients.recipeId')
        .innerJoin('ingredients', 'recipeIngredients.ingredientId', 'ingredients.id')
        .select('recipes.recipeName', 'ingredients.ingredientName', 'recipeIngredients.ingredientQuantity')
        .where({ recipeId })
}

function getInstructions(recipeId) {
    return db('recipes')
        .innerJoin('recipeIngredients', 'recipes.id', 'recipeIngredients.recipeId')
        .innerJoin('instructions', 'instructions.id', 'recipeIngredients.id')
        .select('recipes.recipeName', 'recipeIngredients.ingredientQuantity', 'instructions.stepNumber', 'instructions.instructions')
        .where({ recipeId })
        .orderBy('instructions.stepNumber')
}



module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,

}