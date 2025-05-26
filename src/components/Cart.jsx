import './Cart.css';

function Cart({ carrito, setCarrito }) {
  if (carrito.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="cart">
      {carrito.map((peli, index) => (
        <div key={index} className="cart-item">
          <img src={peli.Poster} alt={peli.Title} />
          <h3>{peli.Title}</h3>
          <p>${peli.price}</p>
          <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );

  function eliminarDelCarrito(index) {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  }
}

export default Cart;