import React from "react";
import { useSelector } from "react-redux";

const UserWelcome = () => {
  const authToken = JSON.parse(localStorage.getItem("authtokens"));
  const user = useSelector((state) => state.user);

  return (
    <div className="media">
      <div className="pull-left">
        <img
          className="media-object user-img"
          src={
            user.data.image
              ? "http://127.0.0.1:8000/" + user.data.image
              : ""
          }
          alt="User Avatar"
        />
      </div>
      <div className="media-body">
        <h2 className="media-heading">
          Welcome {user.data.firstname} {user.data.lastname}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure,
          est. Sit mollitia est maxime! Eos cupiditate tempore, tempora omnis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil.
        </p>
      </div>
    </div>
  );
};

export default UserWelcome;
