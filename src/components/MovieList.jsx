import MovieCard from './MovieCard';

function MovieList({ peliculas, onAdd }) {
    return (
        <ul>
        {peliculas.map(peli => (
            <MovieCard key={peli.imdbID} pelicula={peli} onAdd={onAdd} />
        ))}
        </ul>
    );
}

export default MovieList;
