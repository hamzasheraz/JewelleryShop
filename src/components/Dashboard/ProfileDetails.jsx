import React, { useState, useEffect } from "react";
import Header from "../Layout/Page-Header/Header";
import DashboardMenu from "./DashboardMenu";

const ProfileDetails = () => {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [newImage, setNewImage] = useState(null);
  const authToken = JSON.parse(localStorage.getItem("authtokens"));

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken.access,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        setFormData(data);
      } else {
        console.error("Failed to fetch profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
   
    try {
      const response = await fetch("http://127.0.0.1:8000/updateuser", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + authToken.access,
          'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updatedProfile = await response.json();
        setProfile(updatedProfile);
        setEditMode(false);
      } else {
        console.error("Failed to update profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
                <form onSubmit={handleSubmit}>
                  <div className="media">
                    <div className="pull-left text-center" href="#!">
                      <img
                        className="media-object user-img"
                        src={profile.image ? "http://127.0.0.1:8000/" + profile.image : ""}
                        alt="Profile"
                      />
                      {editMode && (
                        <input type="file" name="image" onChange={handleImageChange} />
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
                            profile.username
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
                            profile.firstname
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
                            profile.lastname
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
                            profile.email
                          )}
                        </li>
                      </ul>
                      {editMode ? (
                        <button type="submit">Save Changes</button>
                      ) : (
                        <button onClick={() => setEditMode(true)}>Edit Profile</button>
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
