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
            <img alt="arrow-down" src={require("../images/arrow-down.png")} />
          </div>
        </div>
        <div className="dog-preview-list">
          <div className="dog-preview-list-item corgi">
            <img alt= "dog" src={require("../images/dog1.jpg")}/> 
            <div className="dog-preview-description">
              <h3>Hunter</h3>
              <p className="text-strong">3 Months</p>
              <p>My name is Hunter, and I'm always happy. I'm also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that's why my name is Hunter!</p>
            </div>
          </div>
          <div className="dog-preview-list-item lab-retriever">
            <img alt= "dog" src={require("../images/dog2.jpg")}/> 
            <div className="dog-preview-description">
              <h3>Champ</h3>
              <p className="text-strong">5 Months</p>
              <p>My name is Champ. I'm super smart, and my caretakers often trusted me with kids. I 'm very patience and will be a great family member of yours.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Homepage;