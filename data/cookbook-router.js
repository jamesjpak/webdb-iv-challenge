const express = require('express');
const router = express.Router();

const Dishes = require('./cookbook-model');


router.get('/', async (req, res) => {
    Dishes.getDishes()
    .then(dishes => {
        res.status(200).json(dishes);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get('/:id', async (req, res) => {
    Dishes.getDish(req.params.id)
    .then(dish => {
        if (dish) {
            res.status(200).json(dish)
        } else {
            res.status(404).json({ message: 'Dish not found!!!' })
        }
    })
})

router.post('/', (req, res) => {
    Dishes.addDish(req.body, "id")
    .then(dish => {
        res.status(201).json(dish)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

// GET for recipes
router.get('/recipes', (req, res) => {
    Dishes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/recipes', (req, res) => {
    Dishes.addRecipe(req.body, "id")
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;