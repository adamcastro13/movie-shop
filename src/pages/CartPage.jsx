import Cart from '../components/Cart';
import './CartPage.css';

function CartPage({ carrito, setCarrito }) {
  return (
    <div className="cart-page">
      <h1>Mi Carrito</h1>
      <Cart carrito={carrito} setCarrito={setCarrito} />
    </div>
  );
}

export default CartPage;