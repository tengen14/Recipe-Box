import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "./recipeReducer";

// COMBINE RECIPE REDUCER AND FORM REDUCER
export default combineReducers({
    form: formReducer,
    recipes: recipeReducer
});