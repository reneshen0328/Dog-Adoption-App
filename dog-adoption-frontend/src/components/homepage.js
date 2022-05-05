const Homepage = () => {
    return (
      <div id="landing-page" >
        <div id="banner">
          <div id="banner-left-side">
            <h1>
              <span>
                Human,
              </span>
            will you take me
            </h1>
            <h1>HOME?</h1>
            <button>Subscribe Now</button>
          </div>
          <div id="banner-right-side">
            <img alt="Dog" src={require("../images/dog1.jpg")} />
          </div>
        </div>
        <h2>Find Your Next Loyal Best Friend</h2>
        <div>
          <img alt= "dog" src={require("../images/dog1.jpg")}/> 
          <h5>Dog Name </h5>
          <p> Dog Age</p>
          <p> Description</p>
        </div>
        <div>
          <img alt= "dog" src={require("../images/dog2.jpg")}/> 
          <h5>Dog Name </h5>
          <p> Dog Age</p>
          <p> Description</p>
        </div>
      </div>
    );
  };
  
  export default Homepage;