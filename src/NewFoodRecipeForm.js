const NewFoodRecipeForm = () => {

  return (
    <>
    <div class="form4 top">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-md-offset-2">
                        <div class="form-bg">
                            <form class="form">
                                <div class="form-group">
                                    <label class="sr-only">Name</label>
                                    <input type="text" class="form-control" required="" id="nameNine" placeholder="Name of Recipe" />
                                </div>
                                <div class="form-group">
                                    <label class="sr-only">Email</label>
                                    <input type="email" class="form-control" required="" id="emailNine" placeholder="Prep Time" />
                                </div>
                                <div class="form-group">
                                    <label class="sr-only">Name</label>
                                    <textarea class="form-control" required="" rows="7" id="messageNine" placeholder="Write the Recipe"></textarea>
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