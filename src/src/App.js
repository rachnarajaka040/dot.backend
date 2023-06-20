import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Product from './Components/Product';
import DisplayProduct from './Components/Displayproduct/DisplayProduct';

function App() {
  return (
    <Routes>
     
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/product" element={<Product/>}/>
      
    
     
       <Route path="/displayproduct" element={<DisplayProduct/>}/>
     </Routes>
  );
}

export default App;
