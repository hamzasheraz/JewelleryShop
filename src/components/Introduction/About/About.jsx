import React from "react";
import Header from "../../Layout/Page-Header/Header";
import VideoTestimonial from "./VideoTestimonial";

function About() {
  return (
    <>
      <Header title="About us" page="about us" />
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="img-responsive" src="/src/images/about/about.jpg" />
            </div>
            <div className="col-md-6">
              <h2 className="mt-40">About Our Shop</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                enim, accusantium repellat ex autem numquam iure officiis facere
                vitae itaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <a href="contact.html" className="btn btn-main mt-20">
                Download Company Profile
              </a>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-md-3 text-center">
              <img src="/src/images/about/awards-logo.png" />
            </div>
            <div className="col-md-3 text-center">
              <img src="/src/images/about/awards-logo.png" />
            </div>
            <div className="col-md-3 text-center">
              <img src="/src/images/about/awards-logo.png" />
            </div>
            <div className="col-md-3 text-center">
              <img src="/src/images/about/awards-logo.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="team-members ">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>Team Members</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src="/src/images/team/team-1.jpg" />
                <h4>Jonathon Andrew</h4>
                <p>Founder</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src="/src/images/team/team-2.jpg" />
                <h4>Adipisci Velit</h4>
                <p>Developer</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src="/src/images/team/team-3.jpg" />
                <h4>John Fexit</h4>
                <p>Shop Manager</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-member text-center">
                <img className="img-circle" src="/src/images/team/team-1.jpg" />
                <h4>John Fexit</h4>
                <p>Shop Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoTestimonial videoLink="https://www.youtube.com/watch?v=oyEuk8j8imI&rel=0" />
    </>
  );
}

export default About;
