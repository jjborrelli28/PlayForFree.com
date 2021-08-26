import { types } from "../types/types";

const initialState = {
  categorySelect: `All`,
  category: ``,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mmorpg:
      return {
        categorySelect: action.type,
        category: `&category=mmorpg`,
      };
    case types.shooter:
      return {
        categorySelect: action.type,
        category: `&category=shooter`,
      };
    case types.strategy:
      return {
        categorySelect: action.type,
        category: `&category=strategy`,
      };
    case types.moba:
      return {
        categorySelect: action.type,
        category: `&category=moba`,
      };
    case types.racing:
      return {
        categorySelect: action.type,
        category: `&category=racing`,
      };
    case types.sports:
      return {
        categorySelect: action.type,
        category: `&category=sports`,
      };
    case types.openWorld:
      return {
        categorySelect: action.type,
        category: `&category=open-world`,
      };
    case types.pvp:
      return {
        categorySelect: action.type,
        category: `&category=pvp`,
      };
    case types.firstPerson:
      return {
        categorySelect: action.type,
        category: `&category=first-person`,
      };
    case types.thirdPerson:
      return {
        categorySelect: action.type,
        category: `&category=third-person`,
      };
    case types.anime:
      return {
        categorySelect: action.type,
        category: `&category=anime`,
      };
    case types.card:
      return {
        categorySelect: action.type,
        category: `&category=card`,
      };
    case types.battleRoyale:
      return {
        categorySelect: action.type,
        category: `&category=battle-royale`,
      };
    case types.fantasy:
      return {
        categorySelect: action.type,
        category: `&category=fantasy`,
      };
    case types.fighting:
      return {
        categorySelect: action.type,
        category: `&category=fighting`,
      };
    case types.action:
      return {
        categorySelect: action.type,
        category: `&category=action`,
      };
    case types.military:
      return {
        categorySelect: action.type,
        category: `&category=military`,
      };
    case types.flight:
      return {
        categorySelect: action.type,
        category: `&category=flight`,
      };
    case types.horror:
      return {
        categorySelect: action.type,
        category: `&category=horror`,
      };
    case types.allCategorys:
      return {
        categorySelect: action.type,
        category: ``,
      };

    default:
      return state;
  }
};
