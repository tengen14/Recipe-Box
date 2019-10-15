import recipes from "../apis/recipes";
import {
    GET_RECIPE,
    GET_RECIPES,
    CREATE_RECIPE,
    EDIT_RECIPE,
    DELETE_RECIPE
} from "./types";

export const getRecipes = () => async dispatch => {
    const response = await recipes.get("/recipes");

    dispatch({ type: GET_RECIPES, payload: response.data });
};

// export const getRecipe = () => async dispatch => {
//     const response = await recipes.get(`/recipes/${id}`);

//     dispatch({ type: GET_RECIPE, payload: response.data });
// };