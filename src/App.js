import './App.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Cart from './view/Cart';
import Page from './view/Page';
import Home from './view/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes >
    <Route path='/' element={<Page />} >
      <Route path='' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
