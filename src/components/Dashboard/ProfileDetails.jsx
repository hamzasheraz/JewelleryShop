import React, { useState, useEffect } from "react";
import Header from "../Layout/Page-Header/Header";
import DashboardMenu from "./DashboardMenu";
import { jwtDecode } from "jwt-decode";

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
        console.log("response data",formData)
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
  
    // Extract only the required fields from formData
    const { firstname, lastname, username, email } = formData;
    console.log(firstname,lastname,username,email)
  

  
    // Append the rest of the fields if they exist
    // if (newImage) {
    //   formData1.append("image", newImage);
    // }
    // if (formData["Phone_number"]) {
    //   formData1.append("Phone_number", formData["Phone_number"]);
    // }
    // if (formData["birthdate"]) {
    //   formData1.append("birth_date", formData["birthdate"]);
    // }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/updateuser", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + authToken.access,
          "Content-Type": "application/json",
        },
           body: JSON.stringify({ 
          username:username,
          email:email,
          first_name: firstname,          
          last_name: lastname,       
         })
      });
      if (response.ok) {
        const updatedProfile = await response.json();
        setEditMode(false);
        updateUserProfile(formData)
      } else {
        console.error("Failed to update profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const updateUserProfile = async () => {
    let { Phone_number, birth_date, image } = formData;
    console.log(image)
    Phone_number="0345000"
    const jwt_token = jwtDecode(authToken.access);
  
    const formData1 = new FormData();
    formData1.append('Phone_number', Phone_number);
    formData1.append('birth_date', birth_date);
    //Remember image is another state here when it is changed not in formData if newImage is not
    //written here it will cause issues and not update properly
    formData1.append('image', newImage);
    formData1.append('user_id', jwt_token.user_id); // Include the token as part of form data

    try {
        const response = await fetch("http://127.0.0.1:8000/updateuserprofile", {
            method: "PUT",
            body: formData1,
        });
        if (response.ok) {
            const updatedProfile = await response.json();
            console.log("i am getting this",updatedProfile);
            getProfile();
        } else {
            console.error("Failed to update Userprofile:", response.statusText);
        }
    } catch (error) {
        console.error("Error updating Userprofile:", error);
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
                <form >
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
                          <span>Phone No:</span>{" "}
                          {editMode ? (
                            <input
                              type="text"
                              name="Phone_number"
                              value={formData.Phone_number}
                              onChange={handleChange}
                            />
                          ) : (
                            profile.Phone_number
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
                            profile.birth_date
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
                        <button type="button" onClick={handleSubmit}>Save Changes</button>
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
