const NavBar = () => {

  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg custom-nav-bar"> 
      <a className="navbar-brand" href="#" data-abc="true">Wholesome</a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
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

    
    </>
  )
}
export default NavBar;