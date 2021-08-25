import { types } from "../types/types";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case types.search:
      return action.payload;
    default:
      return state;
  }
};
