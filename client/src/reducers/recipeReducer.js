import _ from "lodash";
import {
  GET_RECIPE,
  GET_RECIPES,
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case GET_RECIPES:
      return {...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
