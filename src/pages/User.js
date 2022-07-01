import React from "react";
import { GetContext } from "../context/GithubContext";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
const User = () => {
  const { loading, userData } = GetContext();
  console.log(userData);
  const {
    html_url,
    avatar_url,
    bio,
    company,
    created_at,
    email,
    followers,
    following,
    location,
    name,
    login,
    repos_url,
    type,
  } = userData;
  return (
    <div className="pb-24">
      <Link to="/" class="btn glass text-black">
        <IoReturnDownBack size={30} />
        BACK TO SEARCH
      </Link>

      <div className="flex justify-center  ">
        {loading ? (
          <button className="btn loading  ">loading</button>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="card card-bordered image-full">
              <figure>
                <img src={avatar_url} alt="userImage" />
              </figure>
              <div className="flex items-start justify-end p-5 flex-col text-white font-bold">
                <div className="card-title 	">{name}</div>
                <div>{login}</div>
              </div>
            </div>

            <div class="badge badge-info gap-2">{type}</div>
            <p className="">{bio}</p>
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              class="btn btn-outline btn-success"
            >
              VISIT GITHUB PROFILE
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
