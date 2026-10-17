import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
<<<<<<< HEAD
=======
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="signup" element={ <Signup/>}/>
        <Route />
       
=======
        <Route path="/signup" element={ <Signup/>}/>
        <Route path= { `/product/`} element={<ProductPage/>}/>
       <Route path ={'/cart'} element={<Cart/>}/>
>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
      

      </Routes>

    </>
  );
}

export default App;
