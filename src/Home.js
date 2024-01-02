import NavBar from './NavBar';
import FoodImage from './assets/foodImage.png';
import DessertsImage from './assets/desserts.jpeg';
import CocktailsImage from './assets/cocktails_image.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {

  return(
    <>
    <NavBar />
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