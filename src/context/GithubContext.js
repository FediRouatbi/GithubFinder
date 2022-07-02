import React, { createContext, useContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
const GithubProvider = createContext();

export const GetContext = () => useContext(GithubProvider);
const GithubContext = ({ children }) => {
  const intialState = {
    users: [],
    loading: false,
    userData: {},
    userRepos: {},
  };
  const [state, dispatch] = useReducer(GithubReducer, intialState);
  const fetchUsers = async (searchText) => {
    setLoading();
    const resp = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?q=${searchText}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await resp.json();

    dispatch({ type: "GET_USERS", users: data.items });
  };
  const userInfo = async (userName) => {
    setLoading();

    const resp = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${userName}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await resp.json();
    const params = new URLSearchParams({ sort: "created", per_page: 10 });
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${userName}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const repos = await response.json();

    dispatch({ type: "SET_USER", userData: data, userRepos: repos });
  };
  const delteUsers = () => {
    dispatch({ type: "DELETE_USERS" });
  };
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubProvider.Provider
      value={{ fetchUsers, ...state, delteUsers, userInfo }}
    >
      {children}
    </GithubProvider.Provider>
  );
};

export default GithubContext;
