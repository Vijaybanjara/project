
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{ BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Hero from './Components/Hero/Hero';
import Popular from './Components/Popular/Popular';
import Offers from './Components/Offers/Offers';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/> 
      <Hero/>
      <Popular/>
      <Offers/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/Womens' element={<ShopCategory category="Women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path=':productId' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
