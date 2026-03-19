import { createContext, useState } from "react";

export const ExpressionContext = createContext();

export const ExpressionContextProvider = ({ children }) => {
  const [mood, setMood] = useState(null);
  const [loadingPlaylist, setLoadingPlaylist] = useState(false);
  const [playingSong, setPlayingSong] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  return (
    <ExpressionContext.Provider
      value={{
        loadingPlaylist,
        setLoadingPlaylist,
        playingSong,
        setPlayingSong,
        playlist,
        setPlaylist,
        mood,
        setMood,
      }}>
      {children}
    </ExpressionContext.Provider>
  );
};
