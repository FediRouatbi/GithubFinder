import React from "react";
import { GetContext } from "../context/GithubContext";
import Repos from "../components/Repos";
import { IoReturnDownBack } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { FaUsers, FaUserFriends, FaCodepen } from "react-icons/fa";
import { Link } from "react-router-dom";
const User = () => {
  const { loading, userData, userRepos } = GetContext();

  const {
    html_url,
    avatar_url,
    bio,
    email,
    followers,
    following,
    location,
    name,
    login,
    type,
    hireable,
    public_repos,
  } = userData;

  return (
    <div className="pb-24">
      <Link to="/" className="btn glass mb-10 text-black sm:mb-20">
        <IoReturnDownBack size={30} />
        BACK TO SEARCH
      </Link>

      <div className=" max-w-md sm:max-w-6xl mx-auto  ">
        {loading ? (
          <button className="btn loading flex mx-auto ">loading</button>
        ) : (
          <div className="flex flex-col gap-2 sm:gap-6  sm:flex-row sm:justify-center">
            <div className="card card-bordered image-full">
              <figure>
                <img src={avatar_url} alt="userImage" />
              </figure>
              <div className="sm:hidden flex items-start justify-end p-5 flex-col text-white/80 z-40 text-2xl ">
                <h1 className="font-bold ">{name}</h1>
                <h2>{login}</h2>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-grow gap-4">
              <div className="flex flex-col gap-2 ">
                <h1 className="font-bold hidden sm:block text-3xl">
                  {name}
                  <span className="text-lg">({login})</span>
                </h1>
                <div className="flex gap-2 items-center ">
                  <div className="badge badge-success gap-2 badge-lg	">
                    {type}
                  </div>
                  {hireable && (
                    <div className="badge badge-info gap-2 badge-lg	">
                      hireable
                    </div>
                  )}
                  <div className=" ml-auto  flex gap-2 items-center">
                    {location && (
                      <div className="badge badge-accent badge-outline badge-lg	">
                        {location}
                      </div>
                    )}
                    <a className="link" href={`mailto:${email}`}>
                      <RiMailSendLine size={25} />
                    </a>
                  </div>
                </div>
              </div>

              <p className="">{bio}</p>
              <div className="flex shadow rounded-md  ">
                <div className="flex flex-col justify-center items-center p-2 grow">
                  <div className="stat-value">
                    <FaUsers />
                  </div>
                  <div className="stat-desc">Followers</div>
                  <div className="text-xl font-bold">{followers}</div>
                </div>

                <div className="flex flex-col justify-center items-center p-2 grow">
                  <a
                    href={`https://github.com/${login}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer"
                    className="stat-value text-secondary"
                  >
                    <FaCodepen />
                  </a>
                  <div className="stat-desc text-secondary">Public Repos</div>
                  <div className="text-xl font-bold">{public_repos}</div>
                </div>

                <div className="flex flex-col justify-center items-center p-2 grow">
                  <div className="stat-value">
                    <FaUserFriends />
                  </div>
                  <div className="stat-desc">Following</div>
                  <div className="text-xl font-bold">{following}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!loading && (
        <div className="max-w-md sm:max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold pt-10 pb-5 ">
            Latest Repositories :
          </h1>
          {userRepos.map((repo) => (
            <Repos key={repo.id} repo={repo} />
          ))}

          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-success"
          >
            VISIT GITHUB PROFILE
          </a>
        </div>
      )}
    </div>
  );
};

export default User;
