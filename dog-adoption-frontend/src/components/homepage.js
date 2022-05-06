const Homepage = () => {
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
              <img alt="Dog" src={require("../images/landing-page-img.jpg")} />
            </div>
          </div>
          <div className="banner-bottom">
            <h3>Find Your Next Loyal Best Friend</h3>
          </div>
        </div>
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