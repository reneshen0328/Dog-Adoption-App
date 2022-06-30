/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {NavLink} from 'react-router-dom';
// import SingleDogPage from '../pages/SingleDogPage';

// const singledog = (props) => {
//   console.log(props);
//   return (
//     <div className="category-wrapper">
//       <span className="font-luckiest-guy"><h1> {props.singledog.breed} </h1></span>
//       <svg height="10" width="360">
//         <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
//       </svg>
//       <h2>Want To Know The Newest Updates On Your Favorite Dog?</h2>
//       <button>Subscribe Now</button>

//       <div className="single-dog-detail-wrapper">
//         <div className="single-dog-detail-bg">
//           <div className='single-dog-detail-content'>
//             <h2 className='single-dog-detail-description'>{props.singledog.name}</h2>
//             <p className='single-dog-detail-description age'>{props.singledog.age}</p>
//             <p className='characteristics'>{props.singledog.characteristics}</p>
//             <p className='description single-dog-description'>{props.singledog.description}</p>
//             <div>
//               <button className='adopt-btn'>Adopt Now</button>
//               <a className="navlink">
//                 <NavLink to= "/">View Other Dogs
//                 </NavLink>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="single-dog-detail-image">
//           <img alt="individual dog" src={require(`../images/${props.singledog.image}`)} />
//         </div>
//       </div>
//     </div>
//   );
// };

function SingleDog(props) {
  const URLs = window.location.href.split('/');

  if (URLs[URLs.length-1] === 'singledog') {
    return (
      <li >
        <div>
          <h2>{props.dogName}</h2>
          <p>{props.age}</p>
          <p>{props.characteristics}</p>
          <p>{props.description}</p>
        </div>
        <button className='adopt-btn'>Adopt Now</button>
        <a className="navlink">
          <NavLink to= "/">View Other Dogs</NavLink>
        </a>
        <img alt={props.dogName} src={props.image} />
      </li>
    );
  };
  return (
    <li className='dog-card'>
      <img alt={props.dogName} src={props.image} />
      <div>
        <NavLink to="/singledog">
          <h2
          >{props.dogName}</h2>
        </NavLink>

        <p>{props.age}</p>
        <p>{props.characteristics}</p>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default SingleDog;
