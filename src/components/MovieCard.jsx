import './MovieCard.css';

function MovieCard({ pelicula, onAdd }) {
    return (
        <div className="movie-card">
            <img
                src={pelicula.Poster !== 'N/A' ? pelicula.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={pelicula.Title}
            />
        <h3>{pelicula.Title}</h3>
        <p>{pelicula.Year}</p>
        <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default MovieCard;
