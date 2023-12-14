import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const NewUser = () => {
// const [ newUserData, setNewUserData ] = useState({});
const [email, setEmail] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
try{
  const response = await axios.post(`http://localhost:3001/newuser`, {email, firstName, lastName, username, password });
  console.log('User added successfully:', response);
} catch(error) {
  console.error('Error Adding New User', error)

}
}

  return (
    <>
     <div className="wrapper">
        <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
            Create Account
        </div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="firstName" value={firstName} id="firstname" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
          </div>
          {/* <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="date" name="birthdate" id="birthdate" placeholder="Birthday" />
          </div> */}
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" value={password} id="pwd" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn mt-3" type='submit'>Sign Up</button>
        </form>
        <div className="text-center fs-6">
            <Link to="/">Back to Login</Link>
        </div>
    </div>
    </>
  )
}

export default NewUser;