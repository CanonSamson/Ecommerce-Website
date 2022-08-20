import './App.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Cart from './view/Cart';
import Page from './view/Page';
import Home from './view/Home';
import Profile from './view/Profile';
import Login from './reg/Login';
import SignIn from './reg/Sign-In';



function App() {
  return (
    <BrowserRouter>
    <Routes >
    <Route path='/' element={<Page />} >
      <Route path='' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='profile' element={<Profile />} />
    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/signin' element={<SignIn />} />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
