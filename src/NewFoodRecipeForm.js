import { useState } from "react";

const NewFoodRecipeForm = () => {
  const [addAnotherIngredient, setAddAnotherIngredient] = useState(false);

  const handleAddIngredient = () => {
    setAddAnotherIngredient(true);
  }

  return (
    <>
    <div class="form4 top">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7 col-md-offset-2">
                        <div class="form-bg">
                            <form class="form" id="custom-recipe-form">
                                <div class="form-group">
                                    <label class="sr-only">Name of Recipe</label>
                                    <input type="text" class="form-control" required="" placeholder="Name of Recipe" />
                                </div>
                                <div class="form-group">
                                    <label class="sr-only">Prep Time</label>
                                    <input type="number" class="form-control" required="" placeholder="Prep Time" />
                                </div>
                                <div class="form-group">
                                    <label class="sr-only">Ingredients</label>
                                    <input type="text" class="form-control" required="" onFocus={handleAddIngredient} placeholder="Ingredient and Amount" />
                                </div>
                                <div className="form-group">
                                  <i class="fas fa-plus align-items-left"></i>
                                </div>

                                <div class="form-group">
                                    <label class="sr-only">Directions</label>
                                    <textarea class="form-control" required="" rows="7" placeholder="Directions"></textarea>
                                </div>
                                <button type="submit" class="btn text-center btn-blue">Done</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default NewFoodRecipeForm;