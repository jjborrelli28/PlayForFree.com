import { types } from "../types/types";

const initialState = {
  platformSelect: `All`,
  platform: ``,
};

export const platformReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pc:
      return {
        platformSelect: action.type,
        platform: `&platform=pc`,
      };
    case types.web:
      return {
        platformSelect: action.type,
        platform: `&platform=browser`,
      };
    case types.allPlatforms:
      return {
        platformSelect: action.type,
        platform: ``,
      };

    default:
      return state;
  }
};
