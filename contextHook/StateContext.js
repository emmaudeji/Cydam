import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";

const Context = createContext();

const StateContext = ({ children }) => {
  const [devotional, setDevotional] = useState("emma bros");

  return (
    <Context.Provider value={{ devotional }}>{children}</Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
