/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import SingleDog from '../components/Singledog';

function SingleDogPage(props) {
  console.log(props);
  return <section>
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> {props.breed} </h1></span>
      <svg height="10" width="360">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h2>Want To Know The Newest Updates On Your Favorite Dog?</h2>
      <button>Subscribe Now</button>
    </div>
    <SingleDog
      props={props.dog} />
  </section>;
}

export default SingleDogPage;
