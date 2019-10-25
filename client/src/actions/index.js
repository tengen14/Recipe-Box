import recipes from "../apis/recipes";
import history from "../history";
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

export const getRecipe = id => async dispatch => {
    const response = await recipes.get(`/recipes/${id}`);

    dispatch({ type: GET_RECIPE, payload: response.data });
};

export const createRecipe = formValues => async dispatch => {
    const response = await recipes.post("/recipes", { ...formValues });

    dispatch({ type: CREATE_RECIPE, payload: response.data });
    history.goBack();
}

export const editRecipe = (id, formValues) => async dispatch => {
    const response = await recipes.patch(`/recipes/${id}`, formValues);
  
    dispatch({ type: EDIT_RECIPE, payload: response.data });
    history.goBack();
  };