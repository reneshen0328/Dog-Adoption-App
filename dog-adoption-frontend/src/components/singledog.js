import { NavLink } from "react-router-dom";

const singledog = (props) => {
    return (
      <div >
        <h1>{props.singledog.breed}</h1>
        <h3>Want to know the newest updates on your favorite dog?</h3>
        <button>Subscribe Now</button>

        <div id="single-dog">
          <div id="single-dog-left">
            <h1>{props.singledog.name}</h1>
            <h1>{props.singledog.age}</h1>
            <div id="dog-characteristics">
              <h3>Good Guard Dog</h3>
              <h3>Good Family Pet</h3>
              <h3>Loyal Companion</h3>
              <h3>Courageous</h3>
            </div>

            <p>{props.singledog.description}</p>
            <button>Adopt Now</button>
            <a>
              <NavLink to= "/">View Other Dogs
              </NavLink>
            </a>
          </div>
          <div id="single-dog-right">
            <img alt="individual dog" src={props.singledog.image} />
          </div>
        </div>
      </div>
    );
  };
  
  export default singledog;