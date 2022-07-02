const GithubReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USERS":
      return { ...state, users: [] };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "GET_USERS":
      return { ...state, users: action.users, loading: false };
    case "SET_USER":
      return {
        ...state,
        userData: action.userData,
        loading: false,
        userRepos: action.userRepos,
      };
    default:
      return state;
  }
};
export default GithubReducer;
