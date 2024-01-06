import NavBar from "./NavBar";
import { useState } from "react";
import NewFoodRecipeForm from "./NewFoodRecipeForm";


const Meals = () => {
const [isUserNew, setIsUserNew] = useState(true);
const [newRecipe, addNewRecipe] = useState(false);

const handleAddNewRecipeButton = () => {
  addNewRecipe(true);
  setIsUserNew(false);
}
const handleCloseNewRecipe = () => {
  addNewRecipe(false);
}
  return(
    <>
    <NavBar />
    { isUserNew && 
    <div class="row d-flex justify-content-center mt-100">
      
      <div class="col-md-4">

         <div class="main-card mb-3 card" id="custom-message">
            <div class="card-header">
                <i class="fa fa-wifi mr-2 mb-1"> </i>
                  Meal Recipes
            </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane show active" id="tab-eg3-0" role="tabpanel">
                    <p>Welcome to Wholesome! This is your homepage for all of your favorite homemade meal recipes! To get started, click the plus button below to add a your first recipe.</p></div>
                </div>
              </div>

                <div class="d-block text-center card-footer justify-content-center">
                  <button className="neo-button" onClick={handleAddNewRecipeButton}><i className="fas fa-plus fa-2x"></i> </button>
                                           
                </div>

            </div>
         
      </div>
    </div>

}

    {/* <div class="social-buttons"> 
    <button className="neo-button" onClick={handleAddNewRecipeButton}><i className="fas fa-plus fa-2x"></i> </button> 
    <button className="neo-button"><i className="fas fa-angle-up fa-2x"></i> </button>
    <button className="neo-button"><i className="fas fa-angle-down fa-2x"></i> </button>

    
    </div> */}


{ newRecipe && <NewFoodRecipeForm />

}
    </>
  )
}
export default Meals;