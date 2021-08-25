import { types } from "../types/types";

const initialState = {
  categorySelect: `Todas`,
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
    case types.estrategia:
      return {
        categorySelect: action.type,
        category: `&category=strategy`,
      };
    case types.moba:
      return {
        categorySelect: action.type,
        category: `&category=moba`,
      };
    case types.carrera:
      return {
        categorySelect: action.type,
        category: `&category=racing`,
      };
    case types.deporte:
      return {
        categorySelect: action.type,
        category: `&category=sports`,
      };
    case types.mundoAbierto:
      return {
        categorySelect: action.type,
        category: `&category=open-world`,
      };
    case types.pvp:
      return {
        categorySelect: action.type,
        category: `&category=pvp`,
      };
    case types.primeraPersona:
      return {
        categorySelect: action.type,
        category: `&category=first-person`,
      };
    case types.terceraPersona:
      return {
        categorySelect: action.type,
        category: `&category=third-Person`,
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

    case types.fantasia:
      return {
        categorySelect: action.type,
        category: `&category=fantasy`,
      };
    case types.lucha:
      return {
        categorySelect: action.type,
        category: `&category=fighting`,
      };
    case types.accion:
      return {
        categorySelect: action.type,
        category: `&category=action`,
      };
    case types.militar:
      return {
        categorySelect: action.type,
        category: `&category=military`,
      };
    case types.vuelo:
      return {
        categorySelect: action.type,
        category: `&category=flight`,
      };
    case types.horror:
      return {
        categorySelect: action.type,
        category: `&category=horror`,
      };
    case types.todasCategorias:
      return {
        categorySelect: action.type,
        category: ``,
      };

    default:
      return state;
  }
};
