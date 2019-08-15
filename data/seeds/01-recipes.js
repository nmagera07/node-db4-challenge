
exports.seed = function(knex) {
      return knex('recipes').insert([
        { recipeName: 'Chicken Soup'},
        { recipeName: 'Pizza'},
        { recipeName: 'Tacos'}
      ]);
};
