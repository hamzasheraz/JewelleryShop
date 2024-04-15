import React from "react";
import Beforeline from "./Beforeline";
import Menu from "./Menu";
import Footer from "./Layout/Footer/Footer";
function Contact() {
  return (
    <>
      <Beforeline />
      <Menu />
      <section class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="content">
                <h1 class="page-name">Contact Us</h1>
                <ol class="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li class="active">contact</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-wrapper">
        <div className="contact-section">
          <div className="container">
            <div className="row">
              {/* <!-- Contact Form --> */}
              <div className="contact-form col-md-6 ">
                <form id="contact-form" method="post" action="" role="form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                      name="name"
                      id="name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                      name="subject"
                      id="subject"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      rows="6"
                      placeholder="Message"
                      className="form-control"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>

                  <div id="mail-success" className="success">
                    Thank you. The Mailman is on His Way :)
                  </div>

                  <div id="mail-fail" className="error">
                    Sorry, don't know what happened. Try later :(
                  </div>

                  <div id="cf-submit">
                    <input
                      type="submit"
                      id="contact-submit"
                      className="btn btn-transparent"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>

              {/* <!-- Contact Details --> */}
              <div class="contact-details col-md-6 ">
                <div class="google-map">
                  <div id="map"></div>
                </div>
                <ul class="contact-short-info">
                  <li>
                    <i class="tf-ion-ios-home"></i>
                    <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
                  </li>
                  <li>
                    <i class="tf-ion-android-phone-portrait"></i>
                    <span>Phone: +880-31-000-000</span>
                  </li>
                  <li>
                    <i class="tf-ion-android-globe"></i>
                    <span>Fax: +880-31-000-000</span>
                  </li>
                  <li>
                    <i class="tf-ion-android-mail"></i>
                    <span>Email: hello@example.com</span>
                  </li>
                </ul>
                {/* <!-- Footer Social Links --> */}
                <div class="social-icon">
                  <ul>
                    <li>
                      <a
                        class="fb-icon"
                        href="https://www.facebook.com/themefisher"
                      >
                        <i class="tf-ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/themefisher">
                        <i class="tf-ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://themefisher.com/">
                        <i class="tf-ion-social-dribbble-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://themefisher.com/">
                        <i class="tf-ion-social-googleplus-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://themefisher.com/">
                        <i class="tf-ion-social-pinterest-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--/. End Footer Social Links --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
