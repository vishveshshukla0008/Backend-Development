import { createContext, useState } from "react";

export const postContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState();
  const [post, setPost] = useState();



  return (
    <postContext.Provider
      value={{ loading, setLoading, feed, setFeed, post, setPost }}>
      {children}
    </postContext.Provider>
  );
};
