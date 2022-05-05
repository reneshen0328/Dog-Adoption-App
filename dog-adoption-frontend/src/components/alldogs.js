import { Link } from "react-router-dom";

const Alldog = (props) => {

      function setSingleDog(image,name,age,description,breed){
         props.setSingleDog({image: image, name: name, age: age, description: description,breed: breed})
         
         return <Link to="/singledog" />
      }
    return (
      <div>
            <h1> All Dogs </h1>
            <div >
               <img alt= "dog" src={require("../images/dog1.jpg")}/> 
               <h5  onClick= {() => setSingleDog("../images/dog1.jpg","DogName1","age","dog description","dog breed")}>Dog Name </h5>
               <p> Dog Age</p>
               <p> Description</p>
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
    );
  };
  
  export default Alldog;