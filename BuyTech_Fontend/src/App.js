// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './compotent/Home/Home';
import About from './compotent/About/About';
import Contact from './compotent/Contact/Contact';
import Cart from './compotent/Cart/Cart';
import Wishlist from './compotent/Wishlist/Wishlist';
import Footer from './compotent/layout/Footer';
import NoPage from './compotent/NoPage/NoPage';
import '../src/assents/css/bootstrap-icons.css';
import '../src/assents/css/bootstrap.min.css';
import '../src/assents/css/templatemo-pod-talk.css';
import '../src/assents/fonts/bootstrap-icons.woff';
import '../src/assents/fonts/bootstrap-icons.woff2';
import Header from './compotent/layout/Header';
import Shopping from './compotent/Shopping/Shopping';
import Detail_Page from './compotent/Details Page/Detail_Page';
import Register from './compotent/Register/Register';
import Login from './compotent/Login/Login';
import Laptop from './compotent/Laptop/Laptop';
import Mobile from './compotent/Mobile/Mobile';
import Airbud from './compotent/Airbud/Airbud';
import Charger from './compotent/Charger/Charger';
import Address from './compotent/Address/Address';
import ThankYou from './compotent/Thankyou/ThankYou';
import Order from './compotent/Order/Order';




function App(){

  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="register/login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="shopping/detailpage/:id" element={<Detail_Page />} />
          <Route path="detailpage/:id" element={<Detail_Page />} />
          <Route path="contact" element={<Contact />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="airbud" element={<Airbud />} />
          <Route path="charger" element={<Charger />} />
          <Route path="address" element={<Address />} />
          <Route path="order" element={<Order />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
