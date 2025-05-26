function Cart({ carrito }) {
    return (
        <div>
            <h2>🛒 Carrito</h2>
            <ul>
                {carrito.map(item => (
                <li key={item.imdbID}>{item.Title}</li>
            ))}
            </ul>
        </div>
    );
}

export default Cart;
