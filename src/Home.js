import FoodImage from './assets/foodImage.png';
import DessertsImage from './assets/desserts.jpeg';
import CocktailsImage from './assets/cocktails_image.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {

  return(
    <>

    <nav className="navbar fixed-top navbar-expand-lg custom-nav-bar"> 
  
    <a className="navbar-brand" href="#" data-abc="true">Wholesome</a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> 
        </button>
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


<div class="container d-flex justify-content-center">
                                  
                 <div class="row">
                     
                     <div class="col-md-4">
                         <div class="card p-3 py-4 mt-5 mb-5">
                     <Link to='/meals'>
                     <div class="text-center">
                         <img src={FoodImage} width="100" class="rounded-circle" />
                         
                         <h3 class="mt-2">Meals</h3>
                         <span class="mt-1 clearfix">All of your favorite homemade recipes, in one place.</span>
                                            
                     </div>
                     </Link>
                                      
                 </div>
                     </div>
                     
                     <div class="col-md-4">
                         <div class="card p-3 py-4 mt-5">
                     
                     <div class="text-center">
                         
                         <img src={DessertsImage} width="100" class="rounded-circle" />
                         
                         <h3 class="mt-2">Desserts</h3>
                         <span class="mt-1 clearfix">For those with a sweet-tooth! Add or save your faves.</span>
                                              
                     </div>
                     
                 
                 </div>
                     </div>
                     
                     <div class="col-md-4">
                         <div class="card p-3 py-4 mt-5">
                     
                     <div class="text-center">
                         
                         <img src={CocktailsImage} width="100" class="rounded-circle" />
                         
                         <h3 class="mt-2">Cocktails</h3>
                         <span class="mt-1 clearfix">Check out all of your favorite cocktail recipes here.</span>
                                              
                     </div>
                     
                 
                 </div>
                     </div>
                 
                 </div>
                 
                 
    
             </div>
    
    </>
  )
};

export default Home;