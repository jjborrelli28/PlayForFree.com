import { types } from "../types/types";

const initialState = {
  plataformSelect: `Todas`,
  plataform: ``,
};

export const plataformReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pc:
      return {
        plataformSelect: action.type,
        plataform: `&platform=pc`,
      };
    case types.web:
      return {
        plataformSelect: action.type,
        plataform: `&platform=browser`,
      };
    case types.todasPlataformas:
      return {
        plataformSelect: action.type,
        plataform: ``,
      };
      
    default:
      return state;
  }
};
