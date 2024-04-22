import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="col-md-4 col-xs-12 col-sm-4">
      <div className="logo text-center">
        <Link to="/home">
          {/* SVG Logo here */}
          <svg
            width="135px"
            height="29px"
            viewBox="0 0 155 29"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              fontSize="40"
              fontFamily="AustinBold, Austin"
              fontWeight="bold"
            >
              <g
                id="Group"
                transform="translate(-108.000000, -297.000000)"
                fill="#000000"
              >
                <text id="AVIATO">
                  <tspan x="108.94" y="325">
                    AVIATO
                  </tspan>
                </text>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
