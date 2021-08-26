import { types } from "../types/types";

const initialState = {
  gameId: ``,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gameSelect:
      return action.payload;

    default:
      return state;
  }
};
