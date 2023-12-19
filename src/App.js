import './App.css';
import Login from './Login';
import NewUser from './NewUser';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename = '/'>
        <Routes>
            <Route index element = {<Login />} />
            <Route path = '/newuser' element = {<NewUser />} />
            <Route path = '/home' element = {<Home />} />
        </Routes>
    </Router>
   
    </>
  );
}

export default App;
