import { Link } from "react-router-dom";

const Alldog = (props) => {
    return (
      <div className="category-wrapper">
         <span className="font-luckiest-guy"><h1> All Dogs </h1></span>
         <div className="dog-preview-list">
            <div className="dog-preview-list-item corgi">
               <img alt= "Hunter the corgi" src={require("../images/dog1.jpg")}/> 
               <div className="dog-preview-description-wrapper">
                  <Link to="/singledog">
                     <h3 onClick= {()=>props.setSingleDogPage("../images/dog1.jpg","Hunter","3 Months","My name is Hunter, and I'm always happy. I'm also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that's why my name is Hunter!","Corgi")}>Hunter </h3>
                  </Link> 
                  <div className="subtitle-wrapper">
                     <p className="text-strong"> 3 Months</p>
                     <p> Corgi</p>
                  </div>
                  <p className="description">
                     My name is Hunter, and I'm always happy. I'm also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that's why my name is Hunter!
                  </p>
               </div>
            </div>
            
            <div className="dog-preview-list-item lab-retriever">
               <img alt= "Champ the lab-retriever" src={require("../images/dog2.jpg")}/> 
               <div className="dog-preview-description-wrapper">
                  <Link to="/singledog">
                     <h3 onClick= {
                        ()=>props.setSingleDogPage("../images/dog2.jpg","Champ","5 Months","My name is Champ. I'm super smart, and my caretakers often trusted me with kids. I 'm very patience and will be a great family member of yours.","Lab Retriever")}>Champ </h3>
                  </Link> 
                   <div className="subtitle-wrapper">
                     <p className="text-strong"> 5 Months</p>
                     <p> Lab Retriever</p>
                  </div>
                  <p className="description">
                     My name is Champ. I'm super smart, and my caretakers often trusted me with kids. I 'm very patience and will be a great family member of yours.
                  </p>
               </div>
            </div>

            <div className="dog-preview-list-item bulldog">
               <img alt= "Drake the bulldog" src={require("../images/dog3.jpg")}/> 
               <div className="dog-preview-description-wrapper">
                  <Link to="/singledog">
                     <h3 onClick= {
                        ()=>props.setSingleDogPage("../images/dog3.jpg","Drake","1 Year","","Bulldog")}>Drake </h3>
                  </Link> 
                   <div className="subtitle-wrapper">
                     <p className="text-strong"> 1 Year</p>
                     <p> Bulldog</p>
                  </div>
                  <p className="description">
                     My name is Drake, and I love kids. I love to move around, and I'm great with tricks! I might look ferocious, but I'm super friendly.
                  </p>
               </div>
            </div>

             <div className="dog-preview-list-item corgi">
               <img alt= "Chick Pea" src={require("../images/dog4.jpg")}/> 
               <div className="dog-preview-description-wrapper">
                  <Link to="/singledog">
                     <h3 onClick= {
                        ()=>props.setSingleDogPage("../images/dog4.jpg","Chick Pea","2 Years","","Corgi")}>Chick Pea </h3>
                  </Link> 
                   <div className="subtitle-wrapper">
                     <p className="text-strong"> 2 Years</p>
                     <p> Corgi</p>
                  </div>
                  <p className="description">
                     My name is Chick Pea, and I love kids. Look at my short little legs and my tiny little tail. Aren't I adorable? Are you ready to take me home today?
                  </p>
               </div>
            </div>               
         </div> 
      </div>
    );
  };
  
  export default Alldog;