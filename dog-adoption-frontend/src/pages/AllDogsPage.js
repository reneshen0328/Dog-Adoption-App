/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import Alldogs from '../components/AllDogs';

function AllDogsPage(props) {
  return <section>
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> All Dogs </h1></span>
      <svg height="10" width="220">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h2>Want To Know The Newest Updates On Your Favorite Dog?</h2>
      <button>Subscribe Now</button>
    </div>
    <Alldogs allDogsData={props.allDogsData} />
    {/* {props.allDogsData.map((dog) =>
      <Alldogs
        key={dog.id}
        id={dog.id}
        age={dog.age}
        image={dog.image}
        dogName={dog.dogName}
        breed={dog.breed}
        description={dog.description}
      />)
    } */}
  </section>;
}

export default AllDogsPage;
