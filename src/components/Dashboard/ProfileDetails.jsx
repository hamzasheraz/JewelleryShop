import React, { useState } from "react";
import Header from "../Layout/Page-Header/Header";
import DashboardMenu from "./DashboardMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserDetails,
  updateUserDetails,
  updateUserProfile,
} from "../../redux/slices/UserSlice/userSlice";

const ProfileDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [newImage, setNewImage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserDetails(formData));
    dispatch(updateUserProfile({ ...formData, newImage: newImage }));
    dispatch(fetchUserDetails());
    setEditMode(false);
  };

  return (
    <>
      <Header title="Dashboard" page="My Profile" />
      <DashboardMenu active="profile" />
      <section className="user-dashboard page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="dashboard-wrapper dashboard-user-profile">
                <form>
                  <div className="media">
                    <div className="pull-left text-center" href="#!">
                      <img
                        className="media-object user-img"
                        src={
                          user.data.image
                            ? "http://127.0.0.1:8000/" + user.data.image
                            : ""
                        }
                        alt="Profile"
                      />
                      {editMode && (
                        <input
                          type="file"
                          name="image"
                          onChange={handleImageChange}
                        />
                      )}
                    </div>
                    <div className="media-body">
                      <ul className="user-profile-list">
                        <li>
                          <span>Full Name:</span>{" "}
                          {editMode ? (
                            <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                            />
                          ) : (
                            `${user.data.firstname} ${user.data.lastname}`
                          )}
                        </li>

                        <li>
                          <span>First Name:</span>{" "}
                          {editMode ? (
                            <input
                              type="text"
                              name="firstname"
                              value={formData.firstname}
                              onChange={handleChange}
                            />
                          ) : (
                            `${user.data.firstname}`
                          )}
                        </li>
                        <li>
                          <span>Last Name:</span>{" "}
                          {editMode ? (
                            <input
                              type="text"
                              name="lastname"
                              value={formData.lastname}
                              onChange={handleChange}
                            />
                          ) : (
                            `${user.data.lastname}`
                          )}
                        </li>
                        <li>
                          <span>Phone No:</span>{" "}
                          {editMode ? (
                            <input
                              type="text"
                              name="Phone_number"
                              value={formData.Phone_number}
                              onChange={handleChange}
                            />
                          ) : (
                            `${user.data.Phone_number}`
                          )}
                        </li>
                        <li>
                          <span>Birth date:</span>{" "}
                          {editMode ? (
                            <input
                              type="text"
                              name="birth_date"
                              value={formData.birth_date}
                              onChange={handleChange}
                            />
                          ) : (
                            `${user.data.birth_date}`
                          )}
                        </li>
                        <li>
                          <span>Email:</span>{" "}
                          {editMode ? (
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          ) : (
                            `${user.data.email}`
                          )}
                        </li>
                      </ul>
                      {editMode ? (
                        <button type="button" onClick={handleSubmit}>
                          Save Changes
                        </button>
                      ) : (
                        <button onClick={() => setEditMode(true)}>
                          Edit Profile
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
