import { types } from "../types/types";

const initialState = { orderSelect: "Popularity", order: "popularity" };

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.popularity:
      return { orderSelect: action.type, order: "popularity" };
    case types.alphabetical:
      return { orderSelect: action.type, order: "alphabetical" };

    default:
      return state;
  }
};
