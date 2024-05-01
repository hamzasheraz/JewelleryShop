import React, { useState }from "react";
import { useEffect } from "react";
import img1 from "../../images/avater.jpg";
import Header from "../Layout/Page-Header/Header";
import DashboardMenu from "./DashboardMenu";

const ProfileDetails = () => {
  const [profile,setProfile]=useState({})
  const authToken = JSON.parse(localStorage.getItem('authtokens'));

  useEffect(()=> {
    getProfile()
  }, [])
    
    let getProfile = async() =>{
      console.log('Bearer ' + String(authToken.access),"Senidng this")
      let response = await fetch('http://127.0.0.1:8000/getuser', {
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + String(authToken.access)
          }
      })
      let data = await response.json()
      if(response.status === 200){
              setProfile(data)
              console.log(data)
      }
      
  }
  return (
    <>
      <Header title="Dashboard" page="my profile" />
      <DashboardMenu active="profile" />
      <section className="user-dashboard page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="dashboard-wrapper dashboard-user-profile">
                <div className="media">
                  {/* <div className="pull-left text-center" href="#!">
                    <img
                      className="media-object user-img"
                      src={img1}
                      alt="Image"
                    />
                    <a href="#x" className="btn btn-transparent mt-20">
                      Change Image
                    </a>
                  </div> */}
                  <div className="media-body">
                    <ul className="user-profile-list">
                      <li>
                        <span>Full Name:</span>{profile.username}
                      </li>
                      <li>
                        <span>Lastname:</span>{profile.firstname}
                      </li>
                      <li>
                        <span>Lastname:</span>{profile.lastname}
                      </li>
                      <li>
                        <span>Email:</span>{profile.email}
                      </li>
                      <li>
                        <span>Phone:</span>+880123123
                      </li>
                      <li>
                        <span>Date of Birth:</span>Dec , 22 ,1991
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
