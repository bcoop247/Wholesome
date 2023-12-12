import {Link} from 'react-router-dom';

const NewUser = () => {

  return (
    <>
     <div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
        </div>
        <div class="text-center mt-4 name">
            Create Account
        </div>
        <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="firstname" id="firstname" placeholder="First Name" />
          </div>
          <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
          </div>
          <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="date" name="birthdate" id="birthdate" placeholder="Birthday" />
          </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username" />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" />
            </div>
            <button class="btn mt-3">Sign Up</button>
        </form>
        <div class="text-center fs-6">
            <Link to="/">Back to Login</Link>
        </div>
    </div>
    </>
  )
}

export default NewUser;