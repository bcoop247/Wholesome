import './App.css';
import Login from './Login';
import NewUser from './NewUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename = '/'>
        <Routes>
            <Route index element = {<Login />} />
            <Route path = '/newuser' element = {<NewUser />} />
        </Routes>
    </Router>
   
    </>
  );
}

export default App;
