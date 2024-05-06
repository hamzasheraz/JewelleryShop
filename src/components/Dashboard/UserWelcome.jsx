// UserWelcome.jsx
import React from "react";
import { useState,useEffect } from "react";

const UserWelcome = () => {
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
    <div className="media">
      <div className="pull-left">
        <img
          className="media-object user-img"
          src={profile.avatar}
          alt="User Avatar"
        />
      </div>
      <div className="media-body">
        <h2 className="media-heading">Welcome {profile.firstname} {profile.lastname}</h2>
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
