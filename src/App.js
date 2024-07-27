import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenCategories from './pages/MenCategories';
import WomenCategories from './pages/WomenCategories';
import ChildrenCategories from './pages/ChildrenCategories';
import BagsCategories from './pages/BagsCategories';
import ShoesCategories from './pages/ShoesCategories';
import AccessoriesCategories from './pages/AccessoriesCategories'
import SignUpForm from './components/SignUpForm';
import CartChaeckout from './components/CartChaeckout';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Context from './Context/Context';



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
          <Route path='/signup&login' element={<SignUpForm />} />
          <Route path='/cart' element={<CartChaeckout />} />
        </Routes>
        <Footer />
        </Context>
    </div>
  );
}

export default App;
