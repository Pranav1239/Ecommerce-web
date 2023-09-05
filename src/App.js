import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";


function App() {
  return (
<>
<Provider store={store}>
<Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login_register" element={<Login/>}/>
    </Routes>
  </Router>
</Provider>
</>
  );
}

export default App;
