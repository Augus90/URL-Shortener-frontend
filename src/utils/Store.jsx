import { createContext, useReducer } from "react";
import Reducer from "./reducer";
import PropTypes from "prop-types";

const initialState = {
  showPopup: true,
  linkList: [],
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node,
};
