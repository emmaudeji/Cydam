import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";

const Context = createContext();

const StateContext = ({ children }) => {
  const [blogData, setBlogData] = useState([])

  const addBlogComment = (comment) => {
    comment.comment && comment.user && blogData[0].comment.push(comment)
    setBlogData(blogData)
    console.log('cotext', blogData)
  }

  return (
    <Context.Provider value={{blogData, setBlogData, addBlogComment  }}>{children}</Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
