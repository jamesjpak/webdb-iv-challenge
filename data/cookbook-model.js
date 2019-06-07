const knex = require("knex");

const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data/recipe.db3"
    },
    useNullAsDefault: true,
    debug: true
}

const db = knex(knexConfig);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('dishes')
}

function getDish(id) {
    return db('dishes')
    .where ({ id })
    .first()
}

 function addDish(dish) {
    return db('dishes')
    .insert(dish, 'id')
    .then(ids => {
        const [id] = ids;
        return getDish(id)
    })
}

function getRecipes() {
    return db('recipes')
}

function addRecipe() {
    return db('recipes')
    .insert(recipe, 'id')
    .then(ids => {
        const [id] = ids;
        return this.get(id)
    })
}
