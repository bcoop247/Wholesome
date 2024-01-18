import './App.css';
import Login from './Login';
import NewUser from './NewUser';
import Home from './Home';
import Meals from './Meals';
import {  HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename = '/'>
        <Routes>
            <Route index element = {<Login />} />
            <Route path = '/newuser' element = {<NewUser />} />
            <Route path = '/home' element = {<Home />} />
            <Route path = '/meals' element = {<Meals />} />
        </Routes>

    </Router>
   
    </>
  );
}

export default App;
