import _ from "lodash";
import {
  GET_RECIPES,
  GET_RECIPE,
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE
} from "../actions/types";


// ACTION PAYLOADS HANDLED IN REDUCER AND UPDATED IN STATE 
export default (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case GET_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
