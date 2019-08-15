const express = require('express')

const Recipes = require('./recipe-model')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.find()
        res.json(recipes)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of recipes'})
    }
})



module.exports = router