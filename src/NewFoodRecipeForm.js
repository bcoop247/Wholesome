import { useState } from "react";

const NewFoodRecipeForm = () => {
  const [addAnotherIngredient, setAddAnotherIngredient] = useState(false);

  const handleAddIngredient = () => {
    setAddAnotherIngredient(true);
  }

  return (
    <>
<div class="wrapper">
        <div class="text-center mt-4 name">

            Wholesome
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" />
            </div>
            <button class="btn mt-3">Login</button>
        </form>

    </div>

    
 

    </>
  )
}

export default NewFoodRecipeForm;