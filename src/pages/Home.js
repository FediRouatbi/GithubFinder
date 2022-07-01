import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { GetContext } from "../context/GithubContext";
const Home = () => {
  const nameRef = useRef();
  const {} = GetContext();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    })
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  };
  const search = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div className="pb-28">
      <form
        className="text-center flex justify-center p-2 "
        onSubmit={(e) => search(e)}
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="Type here"
          className="input w-8/12  max-w-xs border-gray-600  rounded-r-none "
        />
        <button className="flex-grow border-gray-600 border rounded-r-md p-2 bg-neutral text-white">
          search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 justify-items-center">
        {users.length ? (
          users.map((user, i) => (
            <div
              key={i}
              className="flex w-4/5 gap-3 items-center bg-neutral-focus rounded
          p-2"
            >
              <div className="avatar">
                <div className="w-12  rounded">
                  <img src={user.avatar_url} />
                </div>
              </div>
              <div>
                <h1 className="text-white">{user.login}</h1>
                <Link
                  to={`/users/${user.login}`}
                  className="text-xs text-slate-400 "
                >
                  view Profile
                </Link>
              </div>
            </div>
          ))
        ) : (
          <SpinnerCircular className="absolute " />
        )}
      </div>
    </div>
  );
};

export default Home;
