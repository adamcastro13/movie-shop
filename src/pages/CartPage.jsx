import Cart from '../components/Cart';
import './CartPage.css';

function CartPage() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];

    return (
        <div className="cart-page">
            <h1>Mi Carrito</h1>
            <Cart carrito={carritoGuardado} />
        </div>
    );
}

export default CartPage;