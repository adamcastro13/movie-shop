import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';  
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  //localStorage
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  //guardo el carrito en un localStorage 
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">BLOCKBUSTER</div>
        <div className="navbar-links">
            <Link to="/">Inicio</Link>
            <Link to="/cart">Carrito</Link>
        </div>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={<Home carrito={carrito} setCarrito={setCarrito} />} 
        />
        <Route 
          path="/cart" 
          element={<CartPage carrito={carrito} setCarrito={setCarrito} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
