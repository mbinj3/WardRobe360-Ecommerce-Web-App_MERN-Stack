import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenCategories from './pages/MenCategories';
import WomenCategories from './pages/WomenCategories';
import ChildrenCategories from './pages/ChildrenCategories';
import BagsCategories from './pages/BagsCategories';
import ShoesCategories from './pages/ShoesCategories';
import AccessoriesCategories from './pages/AccessoriesCategories'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Context from './Context/Context';
import Checkout from './components/Checkout';



function App() {
  return ( 
    <div className="App">
        <Context>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories/men' element={<MenCategories />}/>
          <Route path='/categories/women' element={<WomenCategories />}/>
          <Route path='/categories/children' element={<ChildrenCategories />}/>
          <Route path='/categories/bags' element={<BagsCategories />}/>
          <Route path='/categories/shoes' element={<ShoesCategories />}/>
          <Route path='/categories/accessories' element={<AccessoriesCategories />}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
        <Footer />
        </Context>
    </div>
  );
}

export default App;
