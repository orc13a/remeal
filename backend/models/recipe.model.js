const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    recipeId: String,
    recipe: String,
    ingredients: Array,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const recipe = mongoose.model('recipe', RecipeSchema);

module.exports = recipe;