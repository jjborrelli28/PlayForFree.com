import { useState } from "react";
import { types } from "../types/types";
import { useDispatch } from "react-redux";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    const action = { type: types.search, payload: target.value };
    dispatch(action);
    setValues(target.value);
  };

  return [values, handleInputChange, reset];
};
