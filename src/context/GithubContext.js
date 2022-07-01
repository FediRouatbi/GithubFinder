import React, { createContext, useContext } from "react";
const GithubProvider = createContext();
export const GetContext = () => useContext(GithubProvider);
const GithubContext = ({ children }) => {
  const data = [4, 5, 6];
  return (
    <GithubProvider.Provider value={{ data }}>
      {children}
    </GithubProvider.Provider>
  );
};

export default GithubContext;
