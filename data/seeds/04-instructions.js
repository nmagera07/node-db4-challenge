
exports.seed = function(knex) {
      return knex('instructions').insert([
        { stepNumber: '1', instructions: 'cook chicken', recipeInstructionsId: '1' },
        { stepNumber: '2', instructions: 'put chicken in broth and boil', recipeInstructionsId: '1' },
        { stepNumber: '1', instructions: 'knead dough', recipeInstructionsId: '2' },
        { stepNumber: '2', instructions: 'put sauce on dough', recipeInstructionsId: '2' },
        { stepNumber: '3', instructions: 'pour cheese on top of sauce', recipeInstructionsId: '2' },
        { stepNumber: '1', instructions: 'put meat in shells', recipeInstructionsId: '3' },
        { stepNumber: '2', instructions: 'put cheese on meat', recipeInstructionsId: '3'}
      ]);
};
