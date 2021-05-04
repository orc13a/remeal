// ----------------------------------------
// All routs /frige/
// ----------------------------------------

// npm packages
const express = require('express');
const api = express.Router();
const { v4: uuidv4 } = require('uuid');

const auth = require('../middleware/Auth');

// Schemas
const recipeSchema = require('../models/recipe.model');

// ----------------------------------------
// GET requests
// ----------------------------------------

api.get('/all', auth, async (req, res) => {
    try {
        const allRecipes = await recipeSchema.find({ });
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(404).json({ meesage: 'Ingen opskrifter fundet', type: 'error'});
    }
});

// ----------------------------------------
// POST requests
// ----------------------------------------

api.post('/', auth, async (req, res) => {
    let selectedRecipesId = [];
    let userRecipes = [];
    const items = req.body.items;

    try {
        const allRecipes = await recipeSchema.find({ });
        
        allRecipes.forEach(recipe => {
            recipe['ingredients'].forEach(ingredientObj => {
                if (items.includes(ingredientObj.ingredient) === true && selectedRecipesId.includes(recipe.recipeId) === false) {
                    userRecipes.push(recipe);
                    selectedRecipesId.push(recipe.recipeId);
                }
            });
        });

        // if (userRecipes.length === 0) {
        //     res.status(200).json({ message: 'empty', type: 'error' });
        // } else {
            res.status(200).json(userRecipes);
        // }
    } catch (error) {
        res.status(200).json({ meesage: 'Ingen opskrifter fundet', type: 'error'});
    }
});

// ----------------------------------------
// Export
// ----------------------------------------

// Export we can be used outside this file
module.exports = api;