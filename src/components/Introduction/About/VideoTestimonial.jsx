// VideoTestimonial.jsx
import React from 'react';

const VideoTestimonial = ({ videoLink }) => {
  return (
    <div className="section video-testimonial bg-1 overly-white text-center mt-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Video presentation</h2>
            <a
              className="play-icon"
              href={videoLink}
              data-toggle="lightbox"
            >
              <i className="tf-ion-ios-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
