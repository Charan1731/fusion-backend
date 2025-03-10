import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { fetchRecipe, fetchUserRecipes, generateRecipeContent, saveRecipe } from '../controller/recipe.controller.js';


const recipeRouter = Router();

recipeRouter.post('/generate', authorize, generateRecipeContent );

recipeRouter.post('/save', authorize, saveRecipe );

recipeRouter.get('/fetch/:id', fetchRecipe );

recipeRouter.get('/fetch/user/:id',authorize, fetchUserRecipes );

export default recipeRouter;