// UserWelcome.jsx
import React from "react";

const UserWelcome = ({ userName, imageUrl }) => {
  return (
    <div className="media">
      <div className="pull-left">
        <img
          className="media-object user-img"
          src={imageUrl}
          alt="User Avatar"
        />
      </div>
      <div className="media-body">
        <h2 className="media-heading">Welcome {userName}</h2>
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
