import { Link } from "react-router-dom";

const Alldog = (props) => {

      function setSingleDog(image,name,age,description,breed){
         props.setSingleDog({image: image, name: name, age: age, description: description,breed: breed})
         
         return <Link to="/singledog" />
      }
    return (
      <div className="category-wrapper">
         <h1> All Dogs </h1>
         <div className="dog-preview-list">
            <div className="dog-preview-list-item corgi">
               <img alt= "dog" src={require("../images/dog1.jpg")}/> 
               <div className="dog-preview-description">
                  <h3  onClick= {() => setSingleDog("../images/dog1.jpg","DogName1","age","dog description","dog breed")}>Hunter </h3>
                  <p className="text-strong"> 3 Months</p>
                  <p>My name is Hunter, and I'm always happy. I'm also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that's why my name is Hunter!</p>
               </div>
            </div>

            <div >
               <img alt= "dog" src={require("../images/dog2.jpg")}/> 
               <h5 onClick= {()=>props.setSingledog ({image:"../images/dog2.jpg", name: "DogName1", age:"age", description:"dog description",breed:"dog breed"})}>Dog Name </h5>
               <p> Dog Age</p>
               <p> Description</p>
            </div>
             
            <div >
               <img alt= "dog" src={require("../images/dog3.jpg")}/> 
               <h5 onClick= {()=>props.setSingledog ({image:"../images/dog3.jpg", name: "DogName1", age:"age", description:"dog description",breed:"dog breed"})}>Dog Name </h5>
               <p> Dog Age</p>
               <p> Description</p>
            </div>

            <div >
               <img alt= "dog" src={require("../images/dog4.jpg")} /> 
               <h5 onClick= {()=>props.setSingledog ({image:"../images/dog4.jpg", name: "DogName1", age:"age", description:"dog description",breed:"dog breed"})}>Dog Name </h5>
               <p> Dog Age</p>
               <p> Description</p>
            </div>

            <div >
               <img alt= "dog" src={require("../images/dog5.jpg")} /> 
               <h5 onClick= {()=>props.setSingledog ({image:"../images/dog5.jpg", name: "DogName1", age:"age", description:"dog description",breed:"dog breed"})}>Dog Name </h5>
               <p> Dog Age</p>
               <p> Description</p>
            </div>

            <div >
               <img alt= "dog" src={require("../images/dog6.jpg")}/> 
               <h5 onClick= {()=>props.setSingledog ({image:"../images/dog6.jpg", name: "DogName1", age:"age", description:"dog description",breed:"dog breed"})}>Dog Name </h5>
               <p> Dog Age</p>
               <p> Description</p>
            </div>
         </div>
      </div>
    );
  };
  
  export default Alldog;