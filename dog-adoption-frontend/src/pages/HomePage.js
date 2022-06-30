/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import AllDogs from '../components/AllDogs.js';

const Homepage = (props) => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="banner-content">
          <div className="banner-left-side">
            <h1>
                Human,
              <span className="font-luckiest-guy">
                  HOME ?
              </span>
            </h1>
            <h1>will you take me</h1>
            <button>Subscribe Now</button>
          </div>
          <div className="banner-right-side">
            <img alt="Dog" src={require('../images/landing-page-img.jpg')} />
          </div>
        </div>
        <div className="banner-bottom">
          <h2>Find Your Next Loyal Best Friend</h2>
          <img alt="arrow-down" src={require('../images/arrow-down.png')} />
        </div>
      </div>
      <AllDogs allDogsData={props.allDogsData} />
    </div>
  );
};

export default Homepage;
