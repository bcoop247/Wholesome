const Meals = () => {

  return(
    <>
    <nav className="navbar navbar-expand-lg custom-nav-bar"> <a className="navbar-brand" href="#" data-abc="true">Wholesome</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active"> <a class="nav-link" href="#" data-abc="true">Home <span class="sr-only">(current)</span></a> </li>
            <li className="nav-item"> <a class="nav-link" href="#" data-abc="true">Meals</a> </li>
            <li className="nav-item"> <a class="nav-link" href="#" data-abc="true">Desserts</a> </li>
            <li className="nav-item"> <a class="nav-link" href="#" data-abc="true">Cocktails</a> </li>
        </ul>
        <form onsubmit="event.preventDefault()" class="form-inline my-2 my-lg-0"> <input class="form-control mr-sm-2" type="text" placeholder="Search" /> <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> </form>
    </div>
    </nav>

    <div class="social-buttons"> 
    <button class="neo-button"><i class="fas fa-plus fa-2x"></i> </button> 
    <button class="neo-button"><i class="fa-solid fa-plus"></i> </button> 

    </div>
    {/* <div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}
    </>
  )
}
export default Meals;