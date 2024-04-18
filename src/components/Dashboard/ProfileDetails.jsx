import React from "react";
import img1 from "../../images/avater.jpg";
import Header from "../Layout/Page-Header/Header";
import DashboardMenu from "./DashboardMenu";

const ProfileDetails = () => {
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
                  <div className="pull-left text-center" href="#!">
                    <img
                      className="media-object user-img"
                      src={img1}
                      alt="Image"
                    />
                    <a href="#x" className="btn btn-transparent mt-20">
                      Change Image
                    </a>
                  </div>
                  <div className="media-body">
                    <ul className="user-profile-list">
                      <li>
                        <span>Full Name:</span>Johanna Doe
                      </li>
                      <li>
                        <span>Country:</span>USA
                      </li>
                      <li>
                        <span>Email:</span>mail@gmail.com
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
