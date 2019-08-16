const express = require('express')

const Recipes = require('./recipe-model')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes()
        res.json(recipes)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of recipes'})
    }
})

router.get('/:id/shoppinglist', async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipes.getShoppingList(id)

        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({ message: 'Could not find list with given ID.'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get recipes.'})
    }
})

router.get('/:id/instructions', async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipes.getInstructions(id)

        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({ message: 'Could not find instructions for that ID.'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to grab instructions.'})
    }
})



module.exports = router