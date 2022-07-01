import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GetContext } from "../context/GithubContext";
const Home = () => {
  const nameRef = useRef();

  const { fetchUsers, users, loading, delteUsers, userInfo } = GetContext();

  const search = (e) => {
    e.preventDefault();
    if (!nameRef.current.value)
      return toast.warn("Opps ! you didn't type anything to search for", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    fetchUsers(nameRef.current.value);
    nameRef.current.value = "";
  };
  return (
    <div className="pb-28 ">
      <div className="sm:flex justify-center items-center gap-2">
        <form
          className="text-center   flex justify-center p-2  max-w-lg mx-auto sm:mx-0"
          onSubmit={(e) => search(e)}
        >
          <input
            ref={nameRef}
            type="text"
            placeholder="Type here"
            className="input w-8/12  
            ring-2 ring-neutral  focus:outline-3 focus:outline-yellow-500 border-gray-600  rounded-r-none "
          />

          <button
            data-tip="Search"
            className="tooltip-top tooltip flex-grow  ring-neutral ring-2 border-gray-600 border rounded-r-md p-2 bg-neutral text-white"
          >
            Search
          </button>
        </form>
        {users.length > 0 && (
          <button onClick={delteUsers} className=" btn btn-active btn-ghost">
            Clear
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 justify-items-center ">
        {loading ? (
          <button className="btn loading absolute">loading</button>
        ) : (
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
                  to={`/user/${user.login}`}
                  className="text-xs text-slate-400 link link-hover "
                  onClick={() => userInfo(user.login)}
                >
                  view Profile
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
