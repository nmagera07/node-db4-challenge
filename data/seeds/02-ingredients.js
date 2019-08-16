
exports.seed = function(knex) {
      return knex('ingredients').insert([
        { ingredientName: 'chicken' },
        { ingredientName: 'broth' },
        { ingredientName: 'dough' },
        { ingredientName: 'cheese' },
        { ingredientName: 'sauce' },
        { ingredientName: 'hard shells'},
        { ingredientName: 'beef' },

      ]);
};
